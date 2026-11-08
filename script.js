const data = {
    estrella: {
        title: "Topología Estrella",
        desc: "Todos los nodos se conectan a un dispositivo central (Switch/Hub). Es la más común en redes LAN modernas.",
        features: ["✅ Fácil de instalar y gestionar", "✅ Fallo en un nodo no afecta al resto", "❌ Si falla el centro, cae toda la red"],
        img: "estrella.png" 
    },
    malla: {
        title: "Topología Malla",
        desc: "Cada nodo está conectado a todos los demás. Ofrece máxima redundancia y tolerancia a fallos.",
        features: ["✅ Máxima confiabilidad y seguridad", "✅ Rutas alternativas automáticas", "❌ Costo elevado de cableado"],
        img: "malla.png"
    },
    bus: {
        title: "Topología Bus",
        desc: "Todos los equipos comparten un único cable backbone. Simple pero obsoleta para redes grandes.",
        features: ["✅ Requiere menos cableado", "✅ Fácil de extender linealmente", "❌ Un corte en el backbone detiene todo"],
        img: "bus.png"
    },
    anillo: {
        title: "Topología Anillo",
        desc: "Los nodos forman un círculo cerrado. Los datos viajan en una sola dirección (o doble en Token Ring).",
        features: ["✅ Rendimiento predecible", "✅ No hay colisiones de datos", "❌ Un nodo caído puede romper el ciclo"],
        img: "anillo.png"
    }
};

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Actualizar botones activos
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Obtener datos
        const key = btn.getAttribute('data-target');
        const info = data[key];

        // Animar cambio de contenido
        const card = document.getElementById('content-display');
        card.style.opacity = '0';
        
        setTimeout(() => {
            document.getElementById('topo-title').textContent = info.title;
            document.getElementById('topo-desc').textContent = info.desc;
            document.getElementById('topo-img').src = info.img;
            
            const list = document.getElementById('topo-features');
            list.innerHTML = info.features.map(f => `<li>${f}</li>`).join('');
            
            card.style.opacity = '1';
        }, 200);
    });
});

// Cargar estrella por defecto
document.querySelector('[data-target="estrella"]').click();