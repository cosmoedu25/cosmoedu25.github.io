/**
 * 프로그램 관련 기능 모듈
 */

// 프로그램 상세 페이지 로드
export async function loadProgramDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const programId = urlParams.get('id');
    
    if (!programId) {
        window.location.href = 'course.html';
        return;
    }
    
    try {
        // 프로그램 데이터 가져오기
        console.log('Fetching programs data...');
        
        // 상대 경로를 사용하여 안정적으로 JSON 파일 로드
        const response = await fetch('./data/programs.json');
        
        if (!response.ok) {
            throw new Error(`Failed to fetch programs data: ${response.status} ${response.statusText}`);
        }
    
        const programs = await response.json();
        
        if (!programs[programId]) {
            window.location.href = 'course.html';
            return;
        }
        
        const program = programs[programId];
        
        // 페이지 타이틀 업데이트
        document.title = `${program.title} - ${program.subtitle} | 코스모에듀벤처`;
        
        // 프로그램 이미지와 배지 업데이트
        const programImage = document.querySelector('#programImage');
        if (programImage) {
            programImage.src = program.image;
            programImage.alt = program.title;
        }
        
        const programBadge = document.querySelector('#programBadge');
        if (programBadge) {
            programBadge.textContent = program.badge;
        }
        
        // 프로그램 제목과 부제목 업데이트
        const titleElement = document.querySelector('#programTitle');
        if (titleElement) {
            titleElement.textContent = program.title;
            const subtitleElement = document.createElement('div');
            subtitleElement.className = 'program-subtitle';
            subtitleElement.textContent = program.subtitle;
            titleElement.appendChild(subtitleElement);
        }
        
        // 프로그램 평점 업데이트
        const ratingElement = document.querySelector('#programRating');
        if (ratingElement) {
            const stars = Math.floor(program.rating);
            const hasHalfStar = program.rating % 1 !== 0;
            
            let ratingHtml = '';
            for (let i = 0; i < stars; i++) {
                ratingHtml += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                ratingHtml += '<i class="fas fa-star-half-alt"></i>';
            }
            
            ratingHtml += `<span>${program.rating}</span><span>(${program.ratingCount})</span>`;
            ratingElement.innerHTML = ratingHtml;
        }
        
        // 기간 및 대상 업데이트
        const durationElement = document.querySelector('#programDuration');
        if (durationElement) {
            durationElement.innerHTML = `
                <i class="far fa-clock"></i>
                <span>${program.duration}</span>
            `;
        }
        
        const targetElement = document.querySelector('#programTarget');
        if (targetElement) {
            targetElement.innerHTML = `
                <i class="fas fa-users"></i>
                <span>${program.target}</span>
            `;
        }
        
        // 가격 업데이트
        const priceElement = document.querySelector('#programPrice');
        if (priceElement) {
            priceElement.textContent = program.price;
        }
        
        // 설명 업데이트
        const descriptionElement = document.querySelector('#programDescription');
        if (descriptionElement) {
            descriptionElement.textContent = program.description;
        }
        
        // 목록 업데이트
        updateList('programCurriculum', program.curriculum);
        updateList('programFeatures', program.features);
        updateList('programIncludes', program.includes);
        
    } catch (error) {
        console.error('프로그램 데이터를 불러오는 중 오류가 발생했습니다:', error);
        window.location.href = 'course.html';
    }
}

// 목록 업데이트 헬퍼 함수
function updateList(id, items) {
    const list = document.querySelector(`#${id}`);
    if (list) {
        list.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
    }
}

// 프로그램 탭 전환
export function initProgramTabs() {
    const programTabs = document.querySelectorAll('.program-tab');
    const programContents = document.querySelectorAll('.program-content');

    programTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 탭 활성화 상태 변경
            programTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 컨텐츠 표시/숨김
            const targetId = tab.getAttribute('data-target');
            programContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });
        });
    });
}
