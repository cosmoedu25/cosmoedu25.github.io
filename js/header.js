/**
 * 헤더 관련 기능 모듈
 */

import { debounce } from './utils.js';

// 모바일 메뉴 토글 기능
export function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            const isExpanded = mobileToggle.classList.contains('active');
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            // 접근성 속성 업데이트
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            mobileToggle.setAttribute('aria-label', isExpanded ? '메뉴 열기' : '메뉴 닫기');
        });

        // 메뉴 링크 클릭시 메뉴 닫기
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.setAttribute('aria-label', '메뉴 열기');
            });
            
            // 키보드 접근성 - 엔터 키 처리
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    link.click();
                }
            });
        });
        
        // ESC 키로 메뉴 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                mobileToggle.click();
            }
        });
    }
}

// 스크롤 이벤트 처리
export function initScrollHandler() {
    const header = document.querySelector('header');
    let lastScroll = 0;

    const handleScroll = debounce(() => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scrolled');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scrolled')) {
            header.classList.add('scrolled');
        } else if (currentScroll < lastScroll && header.classList.contains('scrolled')) {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, 100);

    window.addEventListener('scroll', handleScroll);
}
