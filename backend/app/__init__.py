from flask import Flask
from flask_cors import CORS

from .config import Config
from .routes import bp as api_bp


def create_app(config_object=Config) -> Flask:
    app = Flask(__name__)
    app.config.from_object(config_object)
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    app.register_blueprint(api_bp)
    return app
