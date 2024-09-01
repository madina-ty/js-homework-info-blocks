document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.info-block');

    blocks.forEach(block => {
        const header = block.querySelector('.header');
        const content = block.querySelector('.content');

        header.addEventListener('click', () => {
            const openBlock = document.querySelector('.info-block .content:not([style*="display: none"])');
            
            if (openBlock && openBlock !== content) {
                openBlock.style.display = 'none'; 
            }

            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    });
});
