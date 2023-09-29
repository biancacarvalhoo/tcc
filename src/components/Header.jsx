import "/eader.css"

function Header() {
    return (
        <body>
            <header>
            <nav class="navigation">
                <a href="#home" class="logo"><img src="./img/logo.svg" alt="Logo" /></a>
                <ul class="nav-menu">
                    <li class="nav-item"><a href="#equipamentos">Equipamentos</a></li>
                    <li class="nav-item"><a href="#qr-code">QRcode</a></li>
                    <li class="nav-item"><a href="./objetivo.html">Objetivo</a></li>
                    <li class="nav-item"><a href="#">Adaptação</a></li>

                </ul>
                <div class="botoes">
                    <a href="./entrar.html" target="_blank"><button>acessar</button></a>
                    <a href="./cadastrar.html" target="_blank"><button>cadastrar</button></a>
                </div>

                <div class="menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
           </header>
        </body>

    )
}

export default Header