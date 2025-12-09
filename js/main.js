/**
 * Kommuna - Main JavaScript
 * Handles navigation, filtering, and modal functionality
 * Follows WCAG 2.1 AA accessibility guidelines
 */

(function() {
    'use strict';

    // ==========================================================================
    // Mobile Navigation
    // ==========================================================================

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('is-open');

            // Update label for screen readers
            this.setAttribute('aria-label', isExpanded ? 'Öppna meny' : 'Stäng meny');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !mainNav.contains(event.target)) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Öppna meny');
                mainNav.classList.remove('is-open');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mainNav.classList.contains('is-open')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Öppna meny');
                mainNav.classList.remove('is-open');
                menuToggle.focus();
            }
        });
    }

    // ==========================================================================
    // Service Filtering
    // ==========================================================================

    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    if (filterButtons.length > 0 && serviceCards.length > 0) {
        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');

                // Update active state
                filterButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-pressed', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-pressed', 'true');

                // Filter cards
                serviceCards.forEach(function(card) {
                    const category = card.getAttribute('data-category');

                    if (filter === 'all' || category === filter) {
                        card.classList.remove('hidden');
                        card.setAttribute('aria-hidden', 'false');
                    } else {
                        card.classList.add('hidden');
                        card.setAttribute('aria-hidden', 'true');
                    }
                });

                // Announce filter change to screen readers
                announceToScreenReader('Visar ' + (filter === 'all' ? 'alla tjänster' : this.textContent));
            });
        });
    }

    // ==========================================================================
    // Modal Functionality
    // ==========================================================================

    const modalOverlay = document.getElementById('modal-overlay');
    const modal = modalOverlay ? modalOverlay.querySelector('.modal') : null;
    const modalClose = modalOverlay ? modalOverlay.querySelector('.modal-close') : null;
    const cardButtons = document.querySelectorAll('.card-btn[data-service]');

    let previousActiveElement = null;
    let focusableElements = [];

    if (modalOverlay && modal) {
        // Open modal when clicking service card button
        cardButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const serviceId = this.getAttribute('data-service');
                openModal(serviceId);
            });
        });

        // Close modal when clicking close button
        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        // Close modal when clicking overlay
        modalOverlay.addEventListener('click', function(event) {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });

        // Handle keyboard navigation in modal
        modalOverlay.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }

            // Trap focus within modal
            if (event.key === 'Tab') {
                handleTabKey(event);
            }
        });
    }

    /**
     * Open the modal with service information
     * @param {string} serviceId - The ID of the service to display
     */
    function openModal(serviceId) {
        const serviceData = window.servicesData ? window.servicesData[serviceId] : null;

        if (!serviceData) {
            console.warn('Service data not found for:', serviceId);
            return;
        }

        // Populate modal content
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = modalOverlay.querySelector('.modal-description');
        const targetList = modalOverlay.querySelector('.target-list');
        const sectorList = modalOverlay.querySelector('.sector-list');
        const techList = modalOverlay.querySelector('.tech-list');

        if (modalTitle) modalTitle.textContent = serviceData.title;
        if (modalDescription) {
            // Convert newlines to paragraphs
            modalDescription.innerHTML = serviceData.description
                .split('\n\n')
                .map(function(p) { return '<p>' + p.trim() + '</p>'; })
                .join('');
        }

        // Populate lists
        if (targetList) {
            targetList.innerHTML = serviceData.targets
                .map(function(t) { return '<li>' + t + '</li>'; })
                .join('');
        }

        if (sectorList) {
            sectorList.innerHTML = serviceData.sectors
                .map(function(s) { return '<li>' + s + '</li>'; })
                .join('');
        }

        if (techList) {
            techList.innerHTML = serviceData.techRequirements
                .map(function(r) { return '<li>' + r + '</li>'; })
                .join('');
        }

        // Store previous focus
        previousActiveElement = document.activeElement;

        // Show modal
        modalOverlay.classList.add('is-open');
        modalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Get focusable elements
        focusableElements = Array.from(
            modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
        );

        // Focus close button
        if (modalClose) {
            modalClose.focus();
        }

        // Announce to screen readers
        announceToScreenReader('Dialog öppnad: ' + serviceData.title);
    }

    /**
     * Close the modal
     */
    function closeModal() {
        modalOverlay.classList.remove('is-open');
        modalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        // Return focus to previous element
        if (previousActiveElement) {
            previousActiveElement.focus();
        }

        // Announce to screen readers
        announceToScreenReader('Dialog stängd');
    }

    /**
     * Handle tab key for focus trapping
     * @param {KeyboardEvent} event
     */
    function handleTabKey(event) {
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }

    // ==========================================================================
    // Accessibility Helpers
    // ==========================================================================

    /**
     * Announce message to screen readers
     * @param {string} message - The message to announce
     */
    function announceToScreenReader(message) {
        let announcer = document.getElementById('sr-announcer');

        if (!announcer) {
            announcer = document.createElement('div');
            announcer.id = 'sr-announcer';
            announcer.setAttribute('role', 'status');
            announcer.setAttribute('aria-live', 'polite');
            announcer.setAttribute('aria-atomic', 'true');
            announcer.className = 'visually-hidden';
            document.body.appendChild(announcer);
        }

        // Clear and set message (triggers announcement)
        announcer.textContent = '';
        setTimeout(function() {
            announcer.textContent = message;
        }, 100);
    }

    // ==========================================================================
    // Documentation Tabs
    // ==========================================================================

    const tabsContainer = document.querySelector('.tabs');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    if (tabsContainer && tabButtons.length > 0) {
        // Click handler for tabs
        tabButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                switchTab(this);
            });
        });

        // Keyboard navigation for tabs (arrow keys)
        tabsContainer.addEventListener('keydown', function(event) {
            const currentTab = document.activeElement;
            if (!currentTab.classList.contains('tab-btn')) return;

            const tabArray = Array.from(tabButtons);
            const currentIndex = tabArray.indexOf(currentTab);
            let newIndex;

            switch (event.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    event.preventDefault();
                    newIndex = (currentIndex + 1) % tabArray.length;
                    tabArray[newIndex].focus();
                    switchTab(tabArray[newIndex]);
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    event.preventDefault();
                    newIndex = (currentIndex - 1 + tabArray.length) % tabArray.length;
                    tabArray[newIndex].focus();
                    switchTab(tabArray[newIndex]);
                    break;
                case 'Home':
                    event.preventDefault();
                    tabArray[0].focus();
                    switchTab(tabArray[0]);
                    break;
                case 'End':
                    event.preventDefault();
                    tabArray[tabArray.length - 1].focus();
                    switchTab(tabArray[tabArray.length - 1]);
                    break;
            }
        });

        // Check for hash in URL to open specific tab
        function checkUrlHash() {
            const hash = window.location.hash;
            if (hash) {
                const tabId = 'tab-' + hash.slice(1).replace('panel-', '');
                const targetTab = document.getElementById(tabId);
                if (targetTab) {
                    switchTab(targetTab);
                }
            }
        }

        checkUrlHash();
        window.addEventListener('hashchange', checkUrlHash);
    }

    /**
     * Switch to a specific tab
     * @param {HTMLElement} newTab - The tab button to activate
     */
    function switchTab(newTab) {
        const targetPanelId = newTab.getAttribute('aria-controls');
        const targetPanel = document.getElementById(targetPanelId);

        // Deactivate all tabs
        tabButtons.forEach(function(tab) {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', 'false');
            tab.setAttribute('tabindex', '-1');
        });

        // Hide all panels
        tabPanels.forEach(function(panel) {
            panel.classList.remove('active');
            panel.setAttribute('hidden', 'true');
        });

        // Activate new tab
        newTab.classList.add('active');
        newTab.setAttribute('aria-selected', 'true');
        newTab.setAttribute('tabindex', '0');

        // Show new panel
        if (targetPanel) {
            targetPanel.classList.add('active');
            targetPanel.removeAttribute('hidden');
        }

        // Update URL hash without scrolling
        const panelId = targetPanelId.replace('panel-', '');
        history.replaceState(null, null, '#' + panelId);

        // Announce to screen readers
        announceToScreenReader('Visar ' + newTab.textContent.trim());
    }

    // ==========================================================================
    // Handle Reduced Motion Preference
    // ==========================================================================

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function handleReducedMotion() {
        if (prefersReducedMotion.matches) {
            // Disable smooth scrolling
            document.documentElement.style.scrollBehavior = 'auto';
        } else {
            document.documentElement.style.scrollBehavior = 'smooth';
        }
    }

    handleReducedMotion();
    prefersReducedMotion.addEventListener('change', handleReducedMotion);

})();
