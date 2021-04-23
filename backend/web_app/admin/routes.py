from flask import Blueprint, Flask


admin = Blueprint('admin', __name__, url_prefix='/admin')


@admin.route("/dashboard")
def admin_dashboard():
    return "Admin dashboard"


@admin.route("/profile")
def admin_profile():
    return "Admin profile"
