import "./Acesso.css"

function Acesso() {
    return (

        <section class="login">
            <div class="left">
                <div class="left-button">

                    <button>
                    <Link to={"/Home"}>Voltar</Link>
                        </button>
                </div>
                <div class="right">
                    <div class="right-button">
                    <button>
                    <Link to={"/Cadastrar"}>Cadastrar</Link>
                    </button>
                    </div>

                    <div class="right-content">
                        <h1>Acessar</h1>
                        <div class="login-access">
                            <input type="name" name="name" id="name" placeholder="Usuário" />
                            <div class="usuario-img">
                                <img src="./img/usuario.svg" alt="" class="img-fixed" />
                            </div>
                            <input type="password" name="password" id="senha" placeholder="Senha" />
                            <div class="senha-img">
                                <img src="./img/senha.svg" alt="" class="img-fixed" />
                            </div>
                            <button>Acessar</button>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        </section>
    )
}

export default Acesso