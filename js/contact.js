        (function() {
            emailjs.init("1JyNMbVBKRggTTFfi");
        })();

        const form = document.getElementById('contactForm');
        const messageInput = document.getElementById('message');
        const charCount = document.querySelector('.char-count');

        // Character counter
        if (messageInput) {
            messageInput.addEventListener('input', (e) => {
                const count = e.target.value.length;
                charCount.textContent = count + ' / 500';
                if (count > 500) {
                    messageInput.value = messageInput.value.substring(0, 500);
                    charCount.textContent = '500 / 500';
                }
            });
        }

        // Form validation
        function validateForm() {
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');

            // Clear previous errors
            document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

            // Name validation
            if (!name.value.trim()) {
                document.getElementById('nameError').textContent = 'Please enter your name';
                isValid = false;
            } else if (name.value.trim().length < 2) {
                document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
                isValid = false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                document.getElementById('emailError').textContent = 'Please enter your email';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
                isValid = false;
            }

            // Subject validation
            if (!subject.value.trim()) {
                document.getElementById('subjectError').textContent = 'Please enter a subject';
                isValid = false;
            } else if (subject.value.trim().length < 3) {
                document.getElementById('subjectError').textContent = 'Subject must be at least 3 characters';
                isValid = false;
            }

            // Message validation
            if (!message.value.trim()) {
                document.getElementById('messageError').textContent = 'Please enter your message';
                isValid = false;
            } else if (message.value.trim().length < 10) {
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
                isValid = false;
            }

            return isValid;
        }

        // Helper: open mail client as fallback
        function openMailClient(params) {
            try {
                const subject = encodeURIComponent(params.subject || 'Message from website');
                const body = encodeURIComponent(`Name: ${params.from_name}\nEmail: ${params.from_email}\n\n${params.message}`);
                const to = encodeURIComponent(params.to_email || 'adityakatkar@gmail.com');
                const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
                window.location.href = mailto;
            } catch (err) {
                console.error('Fallback mail client failed', err);
                showToast('Unable to open mail client. Please email directly to adityakatkar@gmail.com', 'error');
            }
        }

        // Form submission with EmailJS and robust fallback
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                if (!validateForm()) {
                    showToast('Please fix the errors above', 'error');
                    return;
                }

                const submitBtn = form.querySelector('.form-submit-btn');
                const originalText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

                const templateParams = {
                    from_name: document.getElementById('name').value,
                    from_email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value,
                    to_email: 'adityakatkar@gmail.com'
                };

                // If EmailJS isn't available, fallback to opening mail client
                if (typeof emailjs === 'undefined' || !emailjs.send) {
                    console.warn('EmailJS not available; using mail client fallback');
                    showToast('Email service unavailable — opening your mail client', 'error');
                    openMailClient(templateParams);
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                    return;
                }

                try {
                    const resp = await emailjs.send('service_pupn0hb', 'template_8edyav4', templateParams);
                    console.log('EmailJS response:', resp);
                    showToast('✓ Message sent successfully! I will get back to you soon.', 'success');
                    form.reset();
                    charCount.textContent = '0 / 500';
                    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
                } catch (err) {
                    console.error('EmailJS error:', err);
                    const msg = (err && err.text) ? `Failed: ${err.text}` : 'Failed to send message via service.';
                    showToast(`✗ ${msg} Opening mail client as fallback.`, 'error');
                    openMailClient(templateParams);
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }
            });
        }

        // WhatsApp Quick Message Handler
        const waSendBtn = document.getElementById('waSendBtn');
        if (waSendBtn) {
            waSendBtn.addEventListener('click', () => {
                const waName = document.getElementById('waName').value.trim();
                const waSubject = document.getElementById('waSubject').value.trim();
                const waMessage = document.getElementById('waMessage').value.trim();

                if (!waMessage) {
                    showToast('Please enter a message', 'error');
                    return;
                }

                const professorPhone = '919766903455'; 
                let fullMessage = '';
                
                if (waName) fullMessage += `Name: ${waName}\n`;
                if (waSubject) fullMessage += `Subject: ${waSubject}\n`;
                fullMessage += `Message: ${waMessage}`;

                const whatsappUrl = `https://wa.me/${professorPhone}?text=${encodeURIComponent(fullMessage)}`;
                window.open(whatsappUrl, '_blank');

                document.getElementById('waName').value = '';
                document.getElementById('waSubject').value = '';
                document.getElementById('waMessage').value = '';
                showToast('Opening WhatsApp...', 'success');
            });
        }