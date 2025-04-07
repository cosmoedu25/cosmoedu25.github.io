/**
 * 팝업 관련 기능 모듈
 */

// 특징 카드 팝업 기능
export function initFeaturePopups() {
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupClose = document.querySelector('.popup-close');
    const featureCards = document.querySelectorAll('.feature-card');

    // 팝업 관련 요소가 존재할 때만 팝업 기능 초기화
    if (popupOverlay && popupClose && featureCards.length > 0) {
        featureCards.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('.feature-title').textContent;
                const text = card.querySelector('.feature-text').textContent;
                
                // 팝업 내용 설정
                popupOverlay.querySelector('.popup-title').textContent = title;
                popupOverlay.querySelector('.popup-description').textContent = text;
                
                // 팝업 표시
                popupOverlay.style.display = 'flex';
                setTimeout(() => {
                    popupOverlay.classList.add('active');
                }, 10);
            });
        });

        popupClose.addEventListener('click', () => {
            popupOverlay.classList.remove('active');
            setTimeout(() => {
                popupOverlay.style.display = 'none';
            }, 300);
        });

        // ESC 키로 팝업 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
                popupClose.click();
            }
        });
    }
}

// 폼 팝업 관련 기능 - 별도 apply.html 페이지로 이동
export function initFormPopup() {
    // 별도 페이지로 이동했으므로 여기서는 아무 작업도 하지 않습니다.
}
