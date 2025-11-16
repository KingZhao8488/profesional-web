// ========================================
// CONFIGURACIÓN INICIAL
// ========================================

// Número de WhatsApp (CAMBIA ESTE NÚMERO POR EL TUYO)
const WHATSAPP_NUMBER = '573043901902'; // Formato: código país + número sin espacios ni guiones

// Idioma por defecto
let currentLanguage = 'es';

// ========================================
// TRADUCCIONES
// ========================================

const translations = {
    es: {
        // Navegación
        navLang: 'En / Es',
        
        // Hero Section
        heroTitle: 'Transforma tu negocio en una ',
        heroTitleSpan: 'máquina digital',
        heroTitleEnd: ' que trabaja por ti.',
        heroSubtitle: 'Sitios web profesionales y automatizaciones inteligentes para que consigas más clientes y ahorres horas de trabajo, sin depender de respuestas manuales.',
        heroButton: 'Solicita tu auditoría gratuita',
        heroText: 'En 15 minutos te mostraré cómo digitalizar tu negocio y automatizar tus procesos, sin cambiar tus herramientas actuales.',
        
        // Sección Problema
        problemTitle: '¿Sientes que pierdes tiempo respondiendo mensajes o que tu página no te genera clientes?',
        problemText: 'Si eres entrenador, diseñador, consultor o dueño de un pequeño negocio, probablemente estés gastando horas respondiendo por WhatsApp, agendando manualmente o enviando cotizaciones una por una.',
        problemSubtitle: 'Tu web debería trabajar por ti — no al revés.',
        solutionTitle: 'Digitalizo y automatizo tu negocio para que puedas concentrarte en lo importante: ',
        solutionTitleSpan: 'hacer crecer tus ventas.',
        solutionBullet1: 'Web profesional y moderna, adaptada a móviles y fácil de editar.',
        solutionBullet2: 'Automatizaciones simples, que conectan formularios, pagos y WhatsApp.',
        solutionBullet3: 'Resultados medibles, con seguimiento de contactos y conversiones.',
        solutionBullet4: 'Entregas rápidas, en 7–14 días según el paquete.',
        solutionButton: 'Quiero automatizar mi negocio',
        
        // Servicios
        servicesTitle: 'Servicios diseñados para profesionales que quieren vender más con menos esfuerzo',
        service1Title: 'Desarrollo Web Inteligente',
        service1Text: 'Diseños modernos, veloces y optimizados para generar clientes desde el primer día. Incluye formulario conectado a tu WhatsApp, integración de pagos y soporte post-entrega.',
        service1Price: 'Desde $1.200.000 COP',
        service2Title: 'Automatización de Procesos',
        service2Text: 'Conecto tus herramientas (Gmail, Google Sheets, WhatsApp, redes o pasarelas de pago) para que tus tareas diarias se ejecuten solas.',
        service2Price: 'Desde $600.000 COP',
        servicesButton: 'Agenda una sesión gratuita y descubre cómo ahorrar hasta 10 horas semanales',
        
        // Proceso
        processTitle: 'Un proceso simple, claro y rápido',
        step1Title: 'Evaluación gratuita',
        step1Text: 'Entendemos tu negocio y tus necesidades.',
        step2Title: 'Diseño y desarrollo',
        step2Text: 'Creamos tu web o flujo automatizado en 7–14 días.',
        step3Title: 'Entrega y soporte',
        step3Text: 'Te entrego todo listo y te enseño cómo gestionarlo.',
        processSubtitle: 'Sin tecnicismos, sin estrés. Soluciones reales, hechas a tu medida.',
        processButton: 'Solicitar evaluación gratuita ahora',
        
        // FAQ
        faqTitle: 'Sección FAQ — Preguntas frecuentes',
        faq1Question: '¿Cuánto tarda el desarrollo?',
        faq1Answer: 'Depende del paquete. Los proyectos más simples se entregan en 7 a 10 días; los más completos, en 14 a 21 días. Siempre con avances visibles.',
        faq2Question: '¿Cuánto cuesta?',
        faq2Answer: 'Ofrezco opciones desde $600.000 hasta $2.500.000 COP, dependiendo del alcance. Todo con precios fijos y sin cobros ocultos.',
        faq3Question: '¿Necesito saber de tecnología?',
        faq3Answer: 'No. Me encargo de toda la parte técnica, y al final te entrego una guía simple para que puedas editar o actualizar lo que necesites.',
        faq4Question: '¿Qué necesito para empezar?',
        faq4Answer: 'Solo una breve reunión inicial y algunos datos de tu negocio (logo, servicios, textos, etc...). El resto lo construimos juntos.',
        faq5Question: '¿Puedo pedir soporte después de la entrega?',
        faq5Answer: 'Sí. Todos los paquetes incluyen soporte técnico post-entrega, y puedes contratar mantenimiento mensual si deseas asistencia continua.',
        
        // Final
        finalTitle: 'Es momento de dejar de trabajar más y empezar a trabajar mejor.',
        finalText: 'Automatiza tus procesos y convierte tu negocio en una máquina digital.',
        finalButton: 'Quiero mi auditoría gratuita ahora',
        finalSubtext: 'Sin compromiso, solo valor. En 15 minutos te muestro cómo mejorar tu presencia digital y automatizar tu flujo de clientes.',
        
        // Footer
        footerText: '© 2025 — Andres Guerrero | Desarrollo Web + Automatización',
        
        // Formulario
        formName: 'Nombre completo',
        formEmail: 'Correo electrónico',
        formPhone: 'Teléfono (opcional)',
        formService: 'Servicio de interés',
        formServiceOption1: 'Desarrollo Web',
        formServiceOption2: 'Automatización',
        formServiceOption3: 'Ambos servicios',
        formMessage: 'Cuéntame sobre tu proyecto',
        formButton: 'Enviar a WhatsApp',
        formSuccess: '¡Mensaje enviado! Te redirigiremos a WhatsApp.',
        formError: 'Por favor completa todos los campos requeridos.',
    },
    en: {
        // Navigation
        navLang: 'Es / En',
        
        // Hero Section
        heroTitle: 'Transform your business into a ',
        heroTitleSpan: 'digital machine',
        heroTitleEnd: ' that works for you.',
        heroSubtitle: 'Professional websites and smart automations to help you get more clients and save hours of work, without relying on manual responses.',
        heroButton: 'Request your free audit',
        heroText: 'In 15 minutes I\'ll show you how to digitize your business and automate your processes, without changing your current tools.',
        
        // Problem Section
        problemTitle: 'Do you feel like you\'re wasting time responding to messages or that your page doesn\'t generate clients?',
        problemText: 'If you\'re a trainer, designer, consultant or small business owner, you\'re probably spending hours responding on WhatsApp, scheduling manually or sending quotes one by one.',
        problemSubtitle: 'Your website should work for you — not the other way around.',
        solutionTitle: 'I digitize and automate your business so you can focus on what matters: ',
        solutionTitleSpan: 'growing your sales.',
        solutionBullet1: 'Professional and modern website, mobile-friendly and easy to edit.',
        solutionBullet2: 'Simple automations that connect forms, payments and WhatsApp.',
        solutionBullet3: 'Measurable results, with contact and conversion tracking.',
        solutionBullet4: 'Fast deliveries, in 7–14 days depending on the package.',
        solutionButton: 'I want to automate my business',
        
        // Services
        servicesTitle: 'Services designed for professionals who want to sell more with less effort',
        service1Title: 'Smart Web Development',
        service1Text: 'Modern, fast designs optimized to generate clients from day one. Includes form connected to your WhatsApp, payment integration and post-delivery support.',
        service1Price: 'From $1,200,000 COP',
        service2Title: 'Process Automation',
        service2Text: 'I connect your tools (Gmail, Google Sheets, WhatsApp, networks or payment gateways) so your daily tasks run themselves.',
        service2Price: 'From $600,000 COP',
        servicesButton: 'Schedule a free session and discover how to save up to 10 hours per week',
        
        // Process
        processTitle: 'A simple, clear and fast process',
        step1Title: 'Free evaluation',
        step1Text: 'We understand your business and your needs.',
        step2Title: 'Design and development',
        step2Text: 'We create your website or automated flow in 7–14 days.',
        step3Title: 'Delivery and support',
        step3Text: 'I deliver everything ready and teach you how to manage it.',
        processSubtitle: 'No technicalities, no stress. Real solutions, tailored to you.',
        processButton: 'Request free evaluation now',
        
        // FAQ
        faqTitle: 'FAQ Section — Frequently Asked Questions',
        faq1Question: 'How long does development take?',
        faq1Answer: 'It depends on the package. Simpler projects are delivered in 7 to 10 days; more complete ones, in 14 to 21 days. Always with visible progress.',
        faq2Question: 'How much does it cost?',
        faq2Answer: 'I offer options from $600,000 to $2,500,000 COP, depending on the scope. All with fixed prices and no hidden charges.',
        faq3Question: 'Do I need to know about technology?',
        faq3Answer: 'No. I take care of all the technical part, and at the end I deliver a simple guide so you can edit or update what you need.',
        faq4Question: 'What do I need to get started?',
        faq4Answer: 'Just a brief initial meeting and some data about your business (logo, services, texts, etc...). We build the rest together.',
        faq5Question: 'Can I request support after delivery?',
        faq5Answer: 'Yes. All packages include post-delivery technical support, and you can contract monthly maintenance if you want continuous assistance.',
        
        // Final
        finalTitle: 'It\'s time to stop working more and start working better.',
        finalText: 'Automate your processes and turn your business into a digital machine.',
        finalButton: 'I want my free audit now',
        finalSubtext: 'No commitment, just value. In 15 minutes I\'ll show you how to improve your digital presence and automate your client flow.',
        
        // Footer
        footerText: '© 2025 — Andres Guerrero | Web Development + Automation',
        
        // Form
        formName: 'Full name',
        formEmail: 'Email address',
        formPhone: 'Phone (optional)',
        formService: 'Service of interest',
        formServiceOption1: 'Web Development',
        formServiceOption2: 'Automation',
        formServiceOption3: 'Both services',
        formMessage: 'Tell me about your project',
        formButton: 'Send to WhatsApp',
        formSuccess: 'Message sent! We\'ll redirect you to WhatsApp.',
        formError: 'Please complete all required fields.',
    }
};

// ========================================
// FUNCIÓN DE CAMBIO DE IDIOMA
// ========================================

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Actualizar todos los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Actualizar el botón de idioma
    const langButton = document.querySelector('.language-switcher');
    if (langButton) {
        langButton.textContent = lang === 'es' ? 'English' : 'Español';
    }
    
    // Guardar preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    console.log(`Idioma cambiado a: ${lang}`);
}

// ========================================
// VALIDACIÓN Y ENVÍO DE FORMULARIO
// ========================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(formData) {
    const errors = [];
    
    // Validar nombre (requerido)
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push(currentLanguage === 'es' 
            ? 'El nombre debe tener al menos 2 caracteres' 
            : 'Name must be at least 2 characters');
    }
    
    // Validar email (requerido y formato)
    if (!formData.email) {
        errors.push(currentLanguage === 'es' 
            ? 'El correo electrónico es requerido' 
            : 'Email is required');
    } else if (!validateEmail(formData.email)) {
        errors.push(currentLanguage === 'es' 
            ? 'El correo electrónico no es válido' 
            : 'Email is not valid');
    }
    
    // Validar servicio (requerido)
    if (!formData.service) {
        errors.push(currentLanguage === 'es' 
            ? 'Por favor selecciona un servicio' 
            : 'Please select a service');
    }
    
    // Validar mensaje (requerido)
    if (!formData.message || formData.message.trim().length < 10) {
        errors.push(currentLanguage === 'es' 
            ? 'El mensaje debe tener al menos 10 caracteres' 
            : 'Message must be at least 10 characters');
    }
    
    return errors;
}

function sendToWhatsApp(formData) {
    // Construir mensaje para WhatsApp
    const message = `
🎯 *Nueva Solicitud de Auditoría*

👤 *Nombre:* ${formData.name}
📧 *Email:* ${formData.email}
${formData.phone ? `📱 *Teléfono:* ${formData.phone}` : ''}
💼 *Servicio:* ${formData.service}

📝 *Mensaje:*
${formData.message}

---
Enviado desde: ${window.location.href}
    `.trim();
    
    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Crear URL de WhatsApp
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappURL, '_blank');
    
    // Registrar evento en Google Analytics si está disponible
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            'event_category': 'Contact',
            'event_label': formData.service,
            'value': 1
        });
    }
}

function showFormMessage(message, isError = false) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = isError ? 'form-message error' : 'form-message success';
        formMessage.style.display = 'block';
        
        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        service: document.getElementById('contactService').value,
        message: document.getElementById('contactMessage').value
    };
    
    // Validar formulario
    const errors = validateForm(formData);
    
    if (errors.length > 0) {
        showFormMessage(errors.join('. '), true);
        return;
    }
    
    // Enviar a WhatsApp
    sendToWhatsApp(formData);
    
    // Mostrar mensaje de éxito
    showFormMessage(translations[currentLanguage].formSuccess, false);
    
    // Limpiar formulario
    document.getElementById('contactForm').reset();
}

// ========================================
// SMOOTH SCROLL PARA LOS BOTONES CTA
// ========================================

function smoothScrollToForm() {
    const formSection = document.getElementById('contactFormSection');
    if (formSection) {
        formSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ========================================
// TRACKING DE GOOGLE ANALYTICS
// ========================================

function trackButtonClick(buttonName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'button_click', {
            'event_category': 'CTA',
            'event_label': buttonName,
            'value': 1
        });
    }
}

function trackPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_title': pageName,
            'page_location': window.location.href
        });
    }
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Landing page cargada correctamente');
    
    // Cargar idioma preferido del usuario
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        changeLanguage(savedLanguage);
    }
    
    // Configurar botón de cambio de idioma
    const langButton = document.querySelector('.language-switcher');
    if (langButton) {
        langButton.addEventListener('click', function() {
            const newLang = currentLanguage === 'es' ? 'en' : 'es';
            changeLanguage(newLang);
        });
    }
    
    // Configurar formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Configurar todos los botones CTA para scroll suave
    const ctaButtons = document.querySelectorAll('a[href=""]');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            trackButtonClick(this.textContent);
            smoothScrollToForm();
        });
    });
    
    // Track page view inicial
    trackPageView('Landing Page');
    
    // Animaciones al hacer scroll (opcional)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observar secciones para animaciones
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// ========================================
// FUNCIONES AUXILIARES
// ========================================

// Prevenir spam del formulario
let lastSubmissionTime = 0;
const SUBMISSION_COOLDOWN = 5000; // 5 segundos

function canSubmitForm() {
    const now = Date.now();
    if (now - lastSubmissionTime < SUBMISSION_COOLDOWN) {
        const remainingTime = Math.ceil((SUBMISSION_COOLDOWN - (now - lastSubmissionTime)) / 1000);
        showFormMessage(
            currentLanguage === 'es' 
                ? `Por favor espera ${remainingTime} segundos antes de enviar otro mensaje` 
                : `Please wait ${remainingTime} seconds before sending another message`,
            true
        );
        return false;
    }
    lastSubmissionTime = now;
    return true;
}

// Exportar funciones para uso global si es necesario
window.changeLanguage = changeLanguage;
window.trackButtonClick = trackButtonClick;