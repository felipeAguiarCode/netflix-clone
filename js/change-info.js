let r = document.documentElement;
let link1 = document.getElementById("bttrailer");
let link2 = document.getElementById("btinfo");
let item1 = document.querySelector('#item1');
let item2 = document.querySelector('#item2');
let item3 = document.querySelector('#item3');
let item4 = document.querySelector('#item4');
let item5 = document.querySelector('#item5');
let item6 = document.querySelector('#item6');
let item7 = document.querySelector('#item7');
let item8 = document.querySelector('#item8');
let item9 = document.querySelector('#item9');
let item10 = document.querySelector('#item10');
let titulo = document.querySelector('#titulo');
let descricao = document.querySelector('#descricao');

/* Conteudo do jogo 1 */

item1.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=UxDWGW7Z67I";
    link2.href="https://br.ign.com/horizon-forbidden-west/95974/news/ps4-ps5-horizon-forbidden-west-ganha-trailer-de-historia";
    r.style.setProperty('--capa', "url('../img/capa1.jpg')");
    titulo.innerText = 'HORIZON FORBIDDEN WEST';
    descricao.innerText = 'Junte-se à Aloy para desbravar o Oeste Proibido, uma área majestosa e perigosa que esconde novas ameaças misteriosas. Explore terras distantes, enfrente máquinas maiores e mais imponentes, e encontre novas tribos incríveis ao retornar o futuro distante e pós-apocalíptico de Horizon.';
});

/* Conteudo do jogo 2 */

item2.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=1FQ1YO3Ks2U";
    link2.href="https://br.ign.com/sifu/92841/preview/sifu-combate-suave-que-ate-a-manteiga-derrete-previa";
    r.style.setProperty('--capa', "url('../img/capa2.jpg')");
    titulo.innerText = 'SIFU';
    descricao.innerText = 'Sifu conta a história de um jovem aprendiz de Kung Fu a caminho da vingança que busca pelos assassinos de sua família. Um contra todos, sem aliados, mas com incontáveis inimigos. Ele contará com seu domínio do Kung Fu e um pingente misterioso para vencer e preservar o legado da família.';
});

/* Conteudo do jogo 3 */

item3.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=_o7Ip64-Sio";
    link2.href="https://br.ign.com/king-of-fighters-14/75642/news/the-king-of-fighters-xv-e-anunciado";
    r.style.setProperty('--capa', "url('../img/capa3.jpg')");
    titulo.innerText = 'THE KING OF FIGHTERS XV';
    descricao.innerText = 'The King of Fighters XV é a sequência da famosa série de luta da SNK que foi sucesso nos fliperamas brasileiros nos anos 90. O jogo tem lançamento previsto para 17 de fevereiro de 2022 com versões para PC, PlayStation 4 (PS4), PlayStation 5 (PS5) e Xbox Series X/S';
});

/* Conteudo do jogo 4 */

item4.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=UwJAAy7tPhE";
    link2.href="https://br.ign.com/dying-light-2/95900/news/dying-light-2-recebera-pelo-menos-5-anos-de-conteudo-pos-lancamento";
    r.style.setProperty('--capa', "url('../img/capa4.jpg')");
    titulo.innerText = 'DYING LIGHT 2';
    descricao.innerText = 'Dying Light 2 acontece 15 anos após o primeiro jogo, e o vírus que destruiu a cidade de Harran se espalhou, acabando com a civilização global moderna e jogando o mundo no que chamam de “Idade das Trevas Moderna”.';
});

/* Conteudo do jogo 5 */

item5.addEventListener('click', () => {
    link1.href="https://www.youtube.com/watch?v=iDr4l1DdRCU";
    link2.href="https://br.ign.com/saints-row/95185/news/tga-2021-saints-row-self-made-recebe-nova-data";
    r.style.setProperty('--capa', "url('../img/capa5.jpg')");
    titulo.innerText = 'SAINTS ROW SELF MADE';
    descricao.innerText = 'Bem-vindo a Santo Ileso, uma vibrante cidade fictícia no coração do sudoeste americano. Em um mundo repleto de crime, onde facções sem lei lutam pelo poder, um grupo de jovens amigos embarca em sua própria aventura criminosa, enquanto sobem ao topo em sua tentativa de se tornarem Self Made.';
});

/* Conteudo do jogo 6 */
/*
item6.addEventListener('click', () => {
    r.style.setProperty('--capa', "url('../img/capa6.jpg')");
    titulo.innerText = 'Hello World 6';
    descricao.innerText = 'Hello Description 6';
});

/* Conteudo do jogo 7 */
/*
item7.addEventListener('click', () => {
    r.style.setProperty('--capa', "url('../img/capa7.jpg')");
    titulo.innerText = 'Hello World 7';
    descricao.innerText = 'Hello Description 7';
});

/* Conteudo do jogo 8 */
/*
item8.addEventListener('click', () => {
    r.style.setProperty('--capa', "url('../img/capa8.jpg')");
    titulo.innerText = 'Hello World 8';
    descricao.innerText = 'Hello Description 8';
});

/* Conteudo do jogo 9 */
/*
item9.addEventListener('click', () => {
    r.style.setProperty('--capa', "url('../img/capa9.jpg')");
    titulo.innerText = 'Hello World 9';
    descricao.innerText = 'Hello Description 9';
});

/* Conteudo do jogo 10 */
/*
item10.addEventListener('click', () => {
    r.style.setProperty('--capa', "url('../img/capa10.jpg')");
    titulo.innerText = 'Hello World 10';
    descricao.innerText = 'Hello Description 10';
});
*/