import "./Cadastro.css"

function Cadastro() {
    return (
        <section class="cadastrar">
            <div class="left">
                <div class="left-button">
                    <button>
                        <Link to={"/Home"}>Voltar</Link>
                    </button>
                    <a href="./index.html"><button><img src="./voltar-login.svg" alt="" />Voltar</button></a>
                </div>

                <div class="left-content">
                    <h1>dono</h1>
                    <div class="inputs-dono">
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Usuario" />
                        <input type="tel" placeholder="Telefone" />
                        <input type="password" placeholder="Senha" />
                        <input type="text" placeholder="CEP" />
                    </div>
                </div>
            </div>

            <div class="right">
                <div class="right-button">
                    <a href="./entrar.html"><button>Entrar</button></a>
                </div>
            </div>

            <div class="right-content">
                <h1>cachorro</h1>
                <div class="inputs-dono">
                    <input type="text" placeholder="Nome do cachorro" />
                    <input type="text" placeholder="Nome do dono" />
                    <input type="text" placeholder="Raça" />
                    <input type="number" placeholder="Idade" />
                </div>
            </div>

            <button>Cadastrar</button>
        </section>
    )
}

export default Cadastro