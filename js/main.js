/**
 * 메인 JavaScript 파일
 * 페이지별로 필요한 모듈만 초기화
 */

import { initMobileMenu, initScrollHandler } from './header.js';
import { initFeaturePopups, initFormPopup } from './popup.js';
import { initFormValidation } from './forms.js';
import { loadProgramDetail, initProgramTabs } from './programs.js';
import { initInfiniteSlider } from './carousel.js';

// 현재 페이지 파일명 가져오기
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return filename;
}

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    const currentPage = getCurrentPage();
    
    // 모든 페이지에서 필요한 공통 기능 초기화
    initMobileMenu();
    initScrollHandler();
    initFormPopup();
    
    // 페이지별 특정 기능 초기화
    switch(currentPage) {
        case 'index.html':
            // 홈페이지 관련 기능
            initFeaturePopups();
            initInfiniteSlider();
            break;
            
        case 'program-detail.html':
            // 프로그램 상세 페이지 관련 기능
            console.log('Loading program detail...');
            loadProgramDetail().catch(error => {
                console.error('Error loading program detail:', error);
            });
            break;
            
        case 'course.html':
            // 프로그램 목록 페이지 관련 기능
            initProgramTabs();
            break;
            
        case 'about.html':
            // 소개 페이지 관련 기능
            break;
            
        case 'teacher.html':
            // 교원연수 페이지 관련 기능
            break;
            
        case 'apply.html':
            // 신청 페이지 관련 기능
            // 이미 별도의 스크립트로 처리됨
            break;
=======
    }
    
    // 폼이 있는 페이지에서만 유효성 검사 초기화
    if (document.getElementById('contactForm')) {
        initFormValidation();
    }
});
