let loadedDupes = [];
async function loadDupes() {
    try {
        const response = await fetch('./database/index.json');
        const files = await response.json();

        const grid = document.getElementById('dupesGrid');
        grid.innerHTML = '';

        for (const file of files) {
            const dupeRes = await fetch(`./database/${file}`);
            const dupeData = await dupeRes.json();
            loadedDupes.push(dupeData);
            renderCard(dupeData);
        }
    } catch (error) {
        console.error('Erro ao carregar a database de dupes:', error);
    }
}

function renderCard(dupe) {
    const grid = document.getElementById('dupesGrid');
    
    const statusClass = dupe.working_on_anarchy ? 'status-active' : 'status-patched';
    const statusText = dupe.working_on_anarchy ? 'Funcionando/Working' : 'PATCHED';

    const cardHTML = `
        <div class="card" data-title="${dupe.title.toLowerCase()}" data-version="${dupe.version}">
            <div>
                <div class="card-header">
                    <h3 class="card-title">${dupe.title}</h3>
                    <span class="badge-status ${statusClass}">${statusText}</span>
                </div>
                <div class="card-version">Versão: ${dupe.version}</div>
                <p class="card-desc">${dupe.description}</p>
                ${dupe.image_url ? `<img src="${dupe.image_url}" alt="${dupe.title}" class="card-img" loading="lazy">` : ''}
            </div>
            <div class="card-footer">
                <span style="color: var(--text-muted)">Tipo: ${dupe.type}</span>
                ${dupe.video_url ? `<a href="${dupe.video_url}" target="_blank" class="card-link">Ver Vídeo &rarr;</a>` : ''}
            </div>
        </div>
    `;

    grid.innerHTML += cardHTML;
}

function filterDupes() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.getAttribute('data-title');
        const version = card.getAttribute('data-version').toLowerCase();
        
        if (title.includes(query) || version.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function copyIP() {
    const ip = document.getElementById('ipText').innerText;
    navigator.clipboard.writeText(ip);
    
    const btn = document.querySelector('.btn-copy');
    btn.innerText = 'Copiado!';
    btn.style.background = '#22c55e';
    
    setTimeout(() => {
        btn.innerText = 'Copiar IP';
        btn.style.background = 'var(--primary)';
    }, 2000);
}

loadDupes();