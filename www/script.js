document.getElementById('hackathonForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Отменяем стандартную отправку формы
    
    // Собираем данные формы
    const formData = new FormData(this);
    
    // Формируем красивый вывод
    let output = '';
    
    // Обрабатываем каждое поле
    const username = formData.get('username');
    const age = formData.get('age');
    const email = formData.get('email');
    const direction = formData.get('direction');
    const experience = formData.get('experience') === 'yes';
    const role = formData.get('role');
    
    // Маппинг значений для красивого отображения
    const directionMap = {
        'web': 'Web-разработка',
        'mobile': 'Мобильные приложения', 
        'ai': 'Искусственный интеллект',
        'blockchain': 'Блокчейн'
    };
    
    const roleMap = {
        'developer': 'Разработчик (Frontend/Backend)',
        'designer': 'Дизайнер',
        'analyst': 'Аналитик/ML-специалист'
    };
    
    // Формируем вывод
    output += `
        <div class="result-item">
            <span class="result-label">👤 Имя:</span>
            <span class="result-value">${username}</span>
        </div>
        <div class="result-item">
            <span class="result-label">🎂 Возраст:</span>
            <span class="result-value">${age} лет</span>
        </div>
        <div class="result-item">
            <span class="result-label">📧 Email:</span>
            <span class="result-value">${email}</span>
        </div>
        <div class="result-item">
            <span class="result-label">🎯 Направление:</span>
            <span class="result-value">${directionMap[direction] || direction}</span>
        </div>
        <div class="result-item">
            <span class="result-label">📊 Опыт участия:</span>
            <span class="result-value">${experience ? '✅ Есть опыт' : '❌ Нет опыта'}</span>
        </div>
        <div class="result-item">
            <span class="result-label">👥 Роль в команде:</span>
            <span class="result-value">${roleMap[role] || role}</span>
        </div>
    `;
    
    // Показываем результат
    document.getElementById('resultContent').innerHTML = output;
    document.getElementById('result').style.display = 'block';
    
    // Показываем alert с приветствием
    const directionName = directionMap[direction] || direction;
    const roleName = roleMap[role] || role;
    
    alert(`🚀 Отлично, ${username}! 
Ваша регистрация на хакатон принята!

📋 Ваши данные:
• Направление: ${directionName}
• Роль: ${roleName}
• Опыт: ${experience ? 'с опытом' : 'без опыта'}

Удачи в соревновании! 💻✨`);
});