import "./Objetivo.css"

function Objetivo() {
    return (
        <body>
            <header>
            <nav class="navigation">
                <a href="./index.html#home" class="logo"><img src="file:///C:/Users/Bianca%20-%20PC/Downloads/c%20(1).png" alt="" /></a>
                <ul class="nav-menu">
                    <li class="nav-item"><a href="./index.html#equipamentos">Equipamentos</a></li>
                    <li class="nav-item"><a href="./index.html#qr-code">QR code</a></li>
                    <Link to={"/Objetivo"}>Objetivo</Link>
                    <Link to={"/Treinamento"}>Adaptação</Link>
                    
                </ul>
                <div class="botoes">
                <button>
                <Link to={"/Home"}>Voltar</Link>
                <img src="./voltar-login.svg" alt="" />
                </button>
                </div>

                <div class="menu">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>

        <section className="objetivo">
        <div class="objetivo-top-content">
            <div class="obj-um-text">
                <p>
                    Programada por sistema arduino a Animal Collar tem como objetivo principal auxiliar na vida cotidiana de cachorros com deficiência visual e seus nossos, ultilizando leves vibrações que vão auxiliar o cão para não se chocar contra obstáculos
                </p>
            </div>
            <div class="obj-um-img">
                <img src="./obj1.svg" alt=""/>
            </div>
        </div>

        <div class="objetivo-middle-content">
            <div class="obj-dois-img">
                <img src="./obj2.svg" alt=""/>
            </div>

            <div class="obj-dois-text">
                <p>Esse projeto foi uma mordenização da coleira BlinDog que usa o sensores ultrasônicos para alertar o animal 
                    de obstaculos a frente, diferente da BlinDog nossa coleira trás um sistema de QR code que mostra os dados de seu cão.</p>
                    <a href="#"><button>bibliografia</button></a>
            </div>
        </div>

        <div class="objetivo-bottom-content">
            <div class="obj-bottom-content">
                <p>para melhor<br/>experiência com<br/> nosso equipamento<br/> aconselhamos que seu<br/> animal<br/> passe por um simples<br/> treinamento de três<br/> etapas</p>
                
            </div>

            <div class="obj-bottom-button">
                <a href="./treinamento.html" target="_blank"><button>
                    treinamento
                </button></a>
            </div>
           
        </div>

        </section>
        </body>

  
    )
}

export default Objetivo