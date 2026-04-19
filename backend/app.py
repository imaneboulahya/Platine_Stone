from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS

app = Flask(__name__)
# IMPORTANT : CORS doit être configuré pour accepter les requêtes de ton port React (5173 par défaut)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

# Configuration SMTP Gmail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'imaneboulahya705@gmail.com'
# Utilise ton code de 16 lettres sans espaces ici
app.config['MAIL_PASSWORD'] = 'bick gdqk flgh rlne' 
app.config['MAIL_DEFAULT_SENDER'] = 'imaneboulahya705@gmail.com'

mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        # Extraction des données
        full_name = data.get('fullName')
        email = data.get('email')
        project_type = data.get('projectType')
        message_body = data.get('message')

        # Création du message
        msg = Message(
            subject=f"Nouveau Projet Platine Stone: {project_type}",
            recipients=['imaneboulahya705@gmail.com'],
            body=f"Nom: {full_name}\nEmail: {email}\nProjet: {project_type}\n\nMessage:\n{message_body}"
        )
        
        mail.send(msg)
        return jsonify({"status": "success", "message": "Email envoyé !"}), 200

    except Exception as e:
        print(f"Erreur Serveur: {str(e)}")
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)