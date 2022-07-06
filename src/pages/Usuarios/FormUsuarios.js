import { useState } from 'react';
function FormUsuarios(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit() {
        const data = {
            nome: nome,
            email: email,
            senha: password
        };
        fetch("http://localhost:3001/usuarios",{
            method: 'POST',
            body: data
        })
        .then(function(response){
            return response.json();
        })
        .then(function(json){

        })
        .catch(function(error) {
            alert(error);
        });
    }

    return (
        <div>
            <h3>Novo Usuário</h3>
            <form onSubmit={submit}>
                <br />
                <label>Nome</label>
                <input 
                    type="text" 
                    name="nome" 
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                />
                <br />
                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <br />
                <label>Senha</label>
                <input 
                    type="password" 
                    name="senha" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default FormUsuarios;