/**
 * 폼 관련 기능 모듈
 */

import { debounce } from './utils.js';

// 필드 유효성 검사 함수 - 모듈 내부로 이동
function validateField(input, error) {
    const value = input.value.trim();
    let isValid = true;

    switch(input.type) {
        case 'text':
            if (value.length < 2) {
                error.textContent = '최소 2자 이상 입력해주세요.';
                isValid = false;
            } else {
                error.textContent = '';
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                error.textContent = '유효한 이메일 주소를 입력해주세요.';
                isValid = false;
            } else {
                error.textContent = '';
            }
            break;
        case 'tel':
            const phoneRegex = /^[0-9]{2,3}-?[0-9]{3,4}-?[0-9]{4}$/;
            if (!phoneRegex.test(value)) {
                error.textContent = '올바른 전화번호 형식이 아닙니다.';
                isValid = false;
            } else {
                error.textContent = '';
            }
            break;
        case 'textarea':
            if (value.length < 10) {
                error.textContent = '최소 10자 이상 입력해주세요.';
                isValid = false;
            } else {
                error.textContent = '';
            }
            break;
    }

    error.classList.toggle('visible', !isValid);
    return isValid;
}

// 폼 제출 처리 함수 - 모듈 내부로 이동
async function submitForm(form) {
    const formStatus = document.getElementById('formStatus');
    
    try {
        // 로딩 상태 표시
        if (formStatus) {
            formStatus.textContent = '전송 중입니다...';
            formStatus.style.color = 'var(--secondary)';
        }
        
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());
        
        // 서버에 데이터 전송 (실제 엔드포인트로 교체 필요)
        const response = await fetch('https://api.example.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObj)
        });
        
        // 전송 성공
        if (response.ok) {
            if (formStatus) {
                formStatus.textContent = '메시지가 성공적으로 전송되었습니다.';
                formStatus.style.color = 'green';
            }
            
            // 폼 초기화
            setTimeout(() => {
                form.reset();
                if (formStatus) formStatus.textContent = '';
            }, 3000);
            
            return true;
        } else {
            throw new Error('서버 응답 오류');
        }
    } catch (error) {
        console.error('폼 제출 오류:', error);
        
        // 오류 메시지 표시
        if (formStatus) {
            formStatus.textContent = '전송 중 오류가 발생했습니다. 다시 시도해주세요.';
            formStatus.style.color = 'red';
        }
        
        return false;
    }
}

// 폼 유효성 검사 초기화
export function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const formFields = contactForm.querySelectorAll('input, textarea');
        
        formFields.forEach(field => {
            field.addEventListener('input', debounce(function() {
                validateField(this, document.getElementById(this.id + 'Error'));
            }, 300));
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            formFields.forEach(field => {
                if (!validateField(field, document.getElementById(field.id + 'Error'))) {
                    isValid = false;
                }
            });

            if (isValid) {
                // 폼 제출 처리
                submitForm(this);
            }
        });
    }
}
