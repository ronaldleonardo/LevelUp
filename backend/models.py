from app import db

class Task(db.Model):
#id, name, role, desc, gender, status
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    # role = db.Column(db.String(50), nullable=False)
    experience = db.Column(db.Integer, nullable=False)    
    description = db.Column(db.Text, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    status = db.Column(db.Boolean, nullable=False, default=False)

    def to_json(self):
        return {
            "id":self.id,
            "name":self.name,
            "experience": self.experience,
            "description":self.description,
            "gender":self.gender,
            "status": self.status
        }
    
