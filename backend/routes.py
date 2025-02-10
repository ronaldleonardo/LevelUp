from app import app, db
from flask import request, jsonify
from models import Task

# CRUD
# Get all tasks
@app.route("/api/tasks",methods=["GET"])
def get_tasks():
    tasks = Task.query.all()
    result = [task.to_json() for task in tasks]
    return jsonify(result), 200

# Create a task
@app.route("/api/tasks", methods=["POST"])
def create_task():
    try:
        data = request.json

        # Validations
        required_fields = ["name", "experience", "description", "gender"]
        for field in required_fields:
            if field not in data or not data.get(field):
                return jsonify({"error": f"Missing required field: {field}"}), 400

        name = data.get("name")
        experience = data.get("experience")
        description = data.get("description")
        gender = data.get("gender")

        new_task = Task(name=name, experience=experience, description=description, gender=gender)
        
        db.session.add(new_task)
        db.session.commit()

        return jsonify(new_task.to_json()),201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
# Delete a task
@app.route("/api/tasks/<int:id>",methods=["DELETE"])
def delete_task(id):
    try:
        task = Task.query.get(id)
        if task is None:
            return jsonify({"error": "Task not found"}), 404
        
        db.session.delete(task)
        db.session.commit()
        return jsonify({"msg":"Task deleted"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

    
# Update a task profile
@app.route("/api/tasks/<int:id>",methods=["PATCH"])
def update_task(id):
    try:
        task = Task.query.get(id)
        if task is None:
            return jsonify({"erorr": "Task not found"}), 404
        
        data = request.json

        task.name = data.get("name", task.name)
        task.experience = data.get("experience", task.experience)
        task.description = data.get("description", task.description)
        task.gender = data.get("gender", task.gender)

        db.session.commit()
        return jsonify(task.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

    

