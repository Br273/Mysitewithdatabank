from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'sua_chave_secreta'

# Simulação de um banco de dados
usuarios = {
    "usuario": "senha123"
}

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    if username in usuarios and usuarios[username] == password:
        flash('Login bem-sucedido!', 'success')
        return redirect(url_for('home'))
    else:
        flash('Usuário ou senha incorretos', 'danger')
        return redirect(url_for('home'))z'

if __name__ == '__main__':
    app.run(debug=True)
