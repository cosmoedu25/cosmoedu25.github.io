/**
 * 캐러셀 관련 기능 모듈
 */

// 무한 슬라이드 초기화
export function initInfiniteSlider() {
    const sliderTrack = document.getElementById('reviewSliderTrack');
    
    if (!sliderTrack) return;
    
    let isScrolling = false;
    let startPosition = 0;
    let animationId = null;
    const scrollSpeed = 0.5;
    
    // 슬라이드 자동 스크롤
    function autoScroll() {
        if (isScrolling) return;
        
        const scroll = () => {
            // 슬라이드 트랙의 현재 스크롤 위치 업데이트
            sliderTrack.scrollLeft += scrollSpeed;
            
            // 만약 끝에 도달하면 처음으로 순간 이동
            if (sliderTrack.scrollLeft >= sliderTrack.scrollWidth - sliderTrack.clientWidth - 10) {
                sliderTrack.scrollLeft = 0;
            }
            
            animationId = requestAnimationFrame(scroll);
        };
        
        animationId = requestAnimationFrame(scroll);
    }
    
    // 슬라이드 터치/마우스 이벤트 처리
    sliderTrack.addEventListener('mousedown', (e) => {
        isScrolling = true;
        startPosition = e.pageX - sliderTrack.offsetLeft;
        cancelAnimationFrame(animationId);
    });
    
    sliderTrack.addEventListener('touchstart', (e) => {
        isScrolling = true;
        startPosition = e.touches[0].pageX - sliderTrack.offsetLeft;
        cancelAnimationFrame(animationId);
    });
    
    window.addEventListener('mouseup', () => {
        if (isScrolling) {
            isScrolling = false;
            autoScroll();
        }
    });
    
    window.addEventListener('touchend', () => {
        if (isScrolling) {
            isScrolling = false;
            autoScroll();
        }
    });
    
    // 초기 자동 스크롤 시작
    autoScroll();
}
