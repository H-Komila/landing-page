
 document.addEventListener('DOMContentLoaded', function() {
           
            const searchBtn = document.querySelector('.search-btn');
            const searchForm = document.querySelector('.search-form');
            
            searchBtn.addEventListener('click', function(e) {
                e.preventDefault();
                searchForm.classList.toggle('active');
            });
            
           
            const bars = document.querySelector('.bars');
            const mobileNav = document.querySelector('.mobile-nav');
            const closeMenu = document.querySelector('.close-menu');
            const overlay = document.querySelector('.overlay');
            
            bars.addEventListener('click', function() {
                bars.classList.toggle('active');
                mobileNav.classList.toggle('active');
                overlay.classList.toggle('active');
                document.body.style.overflow = 'hidden';
            });
            
            function closeMobileMenu() {
                bars.classList.remove('active');
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            closeMenu.addEventListener('click', closeMobileMenu);
            overlay.addEventListener('click', closeMobileMenu);
            
            
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.search-container')) {
                    searchForm.classList.remove('active');
                }
            });
        });