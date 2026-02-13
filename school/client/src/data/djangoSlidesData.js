export const djangoSlidesData = [
  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Module 1: Django Web Framework Fundamentals",
    title: "Django Web Framework Fundamentals",
    type: "title",
    content: {
      title: "🐍 Django Web Framework",
      subtitle:
        "Build powerful web applications with Python's most popular framework",
      description:
        "Master Django models, views, templates, authentication, deployment, and building production-ready web applications",
    },
    codeExample: "",
    language: "django",
  },
  // =========================
  // Django Module 1: Backend Fundamentals + Django Overview
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + Django Overview",
    title: "What Is Django?",
    type: "two-column",
    content: {
      left: {
        title: "Django Explained",
        items: [
          "High-level Python web framework",
          "Designed for rapid development",
          "Built-in security features",
          "Batteries-included philosophy",
        ],
      },
      right: {
        title: "What Django Is Used For",
        items: [
          "REST APIs",
          "Web applications",
          "Admin dashboards",
          "Enterprise backends",
        ],
      },
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + Django Overview",
    title: "Why Django Exists",
    type: "two-column",
    content: {
      left: {
        title: "Problems Django Solves",
        items: [
          "Rewriting common backend logic",
          "Security misconfigurations",
          "Slow development cycles",
          "Inconsistent architecture",
        ],
      },
      right: {
        title: "Django’s Approach",
        items: [
          "Opinionated structure",
          "Secure by default",
          "ORM for databases",
          "Built-in admin",
        ],
      },
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + Django Overview",
    title: "Django vs Other Frameworks",
    type: "two-column",
    content: {
      left: {
        title: "Django",
        items: [
          "Full-featured",
          "Opinionated",
          "ORM included",
          "Admin panel included",
        ],
      },
      right: {
        title: "Minimal Frameworks",
        items: [
          "More manual setup",
          "Flexible but verbose",
          "External packages required",
          "Higher learning curve",
        ],
      },
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + Django Overview",
    title: "How Django Works (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "Request Flow",
        items: [
          "Client sends request",
          "URL dispatcher matches route",
          "View handles logic",
          "Response returned",
        ],
      },
      right: {
        title: "Core Components",
        items: ["URLs", "Views", "Models", "Templates"],
      },
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + Django Overview",
    title: "Django Architecture (MTV)",
    type: "two-column",
    content: {
      left: {
        title: "Model",
        items: [
          "Defines data structure",
          "Maps to database tables",
          "Handles queries",
          "Data validation",
        ],
      },
      right: {
        title: "Template & View",
        items: [
          "Template → UI layer",
          "View → business logic",
          "Separates concerns",
          "Improves maintainability",
        ],
      },
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + Django Overview",
    title: "Why Python + Django",
    type: "two-column",
    content: {
      left: {
        title: "Python Strengths",
        items: [
          "Readable syntax",
          "Large ecosystem",
          "Strong community",
          "Excellent for backend logic",
        ],
      },
      right: {
        title: "Django Advantage",
        items: [
          "Rapid development",
          "Secure defaults",
          "Scales well",
          "Enterprise trusted",
        ],
      },
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + Django Overview",
    title: "When to Use Django",
    type: "two-column",
    content: {
      left: {
        title: "Good Fit",
        items: [
          "Data-driven apps",
          "Admin-heavy systems",
          "APIs with auth",
          "Rapid MVPs",
        ],
      },
      right: {
        title: "Not Ideal For",
        items: [
          "Very small scripts",
          "Simple static sites",
          "Highly unstructured systems",
          "Low-control environments",
        ],
      },
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + Django Overview",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Installing Django",
          "Creating a project",
          "Project structure",
          "Running the dev server",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Understand Django’s purpose",
          "Know core components",
          "Clear mental model",
          "Ready to build",
        ],
      },
    },
  },
  // =========================
  // Django Module 2: Installation, Project Setup & First Run
  // =========================

  {
    id: 9,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "Prerequisites for Django",
    type: "two-column",
    content: {
      left: {
        title: "What You Need",
        items: [
          "Python 3.10+ installed",
          "pip (Python package manager)",
          "Terminal / command prompt",
          "Basic Python knowledge",
        ],
      },
      right: {
        title: "Why This Matters",
        items: [
          "Django runs on Python",
          "pip manages dependencies",
          "CLI is core to Django workflow",
          "Avoid environment issues",
        ],
      },
    },
  },

  {
    id: 10,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "Creating a Virtual Environment",
    type: "code",
    content: {
      description: "Virtual environments isolate project dependencies.",
      code: `python -m venv venv
source venv/bin/activate  # macOS/Linux
venv\\Scripts\\activate   # Windows`,
    },
  },

  {
    id: 11,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "Why Virtual Environments Are Mandatory",
    type: "two-column",
    content: {
      left: {
        title: "Without Virtualenv",
        items: [
          "Package version conflicts",
          "Global Python pollution",
          "Hard-to-debug issues",
          "Unreliable deployments",
        ],
      },
      right: {
        title: "With Virtualenv",
        items: [
          "Project isolation",
          "Reproducible environments",
          "Clean dependency management",
          "Professional workflow",
        ],
      },
    },
  },

  {
    id: 12,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "Installing Django",
    type: "code",
    content: {
      description: "Install Django inside the virtual environment.",
      code: `pip install django`,
    },
  },

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "Verifying Django Installation",
    type: "code",
    content: {
      description: "Confirm Django is installed correctly.",
      code: `django-admin --version`,
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "Creating a Django Project",
    type: "code",
    content: {
      description: "Create a new Django project.",
      code: `django-admin startproject core`,
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "Understanding Project Structure",
    type: "two-column",
    content: {
      left: {
        title: "Generated Files",
        items: [
          "manage.py",
          "core/__init__.py",
          "core/settings.py",
          "core/urls.py",
          "core/asgi.py",
          "core/wsgi.py",
        ],
      },
      right: {
        title: "Purpose",
        items: [
          "Project entry point",
          "Configuration",
          "URL routing",
          "Deployment interfaces",
        ],
      },
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "Running the Development Server",
    type: "code",
    content: {
      description: "Start Django’s built-in development server.",
      code: `python manage.py runserver`,
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "What Happens When Server Runs",
    type: "two-column",
    content: {
      left: {
        title: "Behind the Scenes",
        items: [
          "Django loads settings",
          "Initializes apps",
          "Starts HTTP server",
          "Listens on port 8000",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Auto-reload on code change",
          "Development only",
          "Not production-ready",
          "Fast feedback loop",
        ],
      },
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "First Django Success Screen",
    type: "two-column",
    content: {
      left: {
        title: "What You See",
        items: [
          "Congratulations message",
          "Django version",
          "Debug mode active",
          "No errors",
        ],
      },
      right: {
        title: "What It Confirms",
        items: [
          "Django installed correctly",
          "Project configured",
          "Server running",
          "Ready to build apps",
        ],
      },
    },
  },

  {
    id: 19,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Skipping virtual environment",
          "Running server outside project",
          "Using wrong Python version",
          "Editing core files blindly",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Activate venv always",
          "Use manage.py commands",
          "Pin Python versions",
          "Understand before modifying",
        ],
      },
    },
  },

  {
    id: 20,
    moduleId: 2,
    moduleTitle: "Installation, Project Setup & First Run",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Django apps",
          "Creating your first app",
          "App vs project",
          "Separation of concerns",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Django installed",
          "Project created",
          "Server running",
          "Ready for app development",
        ],
      },
    },
  },
  // =========================
  // Django Module 3: Apps, App Structure & First View
  // =========================

  {
    id: 21,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "What Is a Django App?",
    type: "two-column",
    content: {
      left: {
        title: "Django App Explained",
        items: [
          "A self-contained feature unit",
          "Handles a specific responsibility",
          "Reusable across projects",
          "Lives inside a Django project",
        ],
      },
      right: {
        title: "App vs Project",
        items: [
          "Project = whole system",
          "App = one feature",
          "Projects contain many apps",
          "Apps contain logic",
        ],
      },
    },
  },

  {
    id: 22,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "Why Django Uses Apps",
    type: "two-column",
    content: {
      left: {
        title: "Without Apps",
        items: [
          "Monolithic codebase",
          "Hard to maintain",
          "Poor reusability",
          "Tight coupling",
        ],
      },
      right: {
        title: "With Apps",
        items: [
          "Clear separation of concerns",
          "Reusable components",
          "Scalable architecture",
          "Team-friendly structure",
        ],
      },
    },
  },

  {
    id: 23,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "Creating Your First App",
    type: "code",
    content: {
      description: "Create a new Django app called tasks.",
      code: `python manage.py startapp tasks`,
    },
  },

  {
    id: 24,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "App Folder Structure",
    type: "two-column",
    content: {
      left: {
        title: "Generated Files",
        items: [
          "admin.py",
          "apps.py",
          "models.py",
          "tests.py",
          "views.py",
          "migrations/",
        ],
      },
      right: {
        title: "Purpose",
        items: [
          "Admin registration",
          "App configuration",
          "Database models",
          "Automated tests",
          "Request handling",
        ],
      },
    },
  },

  {
    id: 25,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "Registering the App",
    type: "code",
    content: {
      description: "Add the app to INSTALLED_APPS.",
      code: `// core/settings.py
INSTALLED_APPS = [
  "django.contrib.admin",
  "django.contrib.auth",
  "django.contrib.contenttypes",
  "django.contrib.sessions",
  "django.contrib.messages",
  "django.contrib.staticfiles",
  "tasks"
]`,
    },
  },

  {
    id: 26,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "Why App Registration Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Registration",
        items: [
          "Models ignored",
          "Migrations not detected",
          "Admin not loaded",
          "App logic inactive",
        ],
      },
      right: {
        title: "With Registration",
        items: [
          "Models tracked",
          "Migrations enabled",
          "Admin integration",
          "App fully active",
        ],
      },
    },
  },

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "Creating Your First View",
    type: "code",
    content: {
      description: "A simple function-based view.",
      code: `// tasks/views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Task App")`,
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "Connecting a URL to the View",
    type: "code",
    content: {
      description: "Map a URL to the view.",
      code: `// tasks/urls.py
from django.urls import path
from .views import home

urlpatterns = [
    path("", home)
]`,
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "Including App URLs in Project",
    type: "code",
    content: {
      description: "Hook app URLs into the main project.",
      code: `// core/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("tasks.urls"))
]`,
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "Request Flow in Django",
    type: "two-column",
    content: {
      left: {
        title: "Flow",
        items: [
          "Request hits URL dispatcher",
          "URL pattern matched",
          "View function executed",
          "Response returned",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Views contain logic",
          "URLs control routing",
          "Apps isolate features",
          "Clear separation",
        ],
      },
    },
  },

  {
    id: 31,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting to register app",
          "Missing urls.py",
          "Putting logic in urls",
          "Returning strings instead of HttpResponse",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Always register apps",
          "Keep views thin and clear",
          "Use urls only for routing",
          "Return proper responses",
        ],
      },
    },
  },

  {
    id: 32,
    moduleId: 3,
    moduleTitle: "Apps, App Structure & First View",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Django templates",
          "Rendering HTML",
          "Template inheritance",
          "Dynamic content",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "App created",
          "First view working",
          "URLs configured",
          "Ready for templates",
        ],
      },
    },
  },
  // =========================
  // Django Module 4: Templates, Dynamic Content & Layouts
  // =========================

  {
    id: 33,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Why Templates Exist",
    type: "two-column",
    content: {
      left: {
        title: "Problem Without Templates",
        items: [
          "HTML mixed with Python logic",
          "Hard-to-maintain views",
          "Poor separation of concerns",
          "Difficult UI reuse",
        ],
      },
      right: {
        title: "What Templates Solve",
        items: [
          "Clean separation of UI and logic",
          "Reusable layouts",
          "Dynamic rendering",
          "Maintainable frontends",
        ],
      },
    },
  },

  {
    id: 34,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Django Template Engine (DTE)",
    type: "two-column",
    content: {
      left: {
        title: "Core Concepts",
        items: [
          "HTML with template tags",
          "Context-driven rendering",
          "Logic-light philosophy",
          "Safe by default",
        ],
      },
      right: {
        title: "What Templates Can Do",
        items: [
          "Render variables",
          "Loop over data",
          "Conditional rendering",
          "Extend base layouts",
        ],
      },
    },
  },

  {
    id: 35,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Creating the Templates Directory",
    type: "code",
    content: {
      description: "Create a templates folder inside the app.",
      code: `tasks/
  templates/
    tasks/
      home.html`,
    },
  },

  {
    id: 36,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Rendering a Template from a View",
    type: "code",
    content: {
      description: "Use render() instead of HttpResponse.",
      code: `// tasks/views.py
from django.shortcuts import render

def home(request):
    return render(request, "tasks/home.html")`,
    },
  },

  {
    id: 37,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Your First Template",
    type: "code",
    content: {
      description: "Basic HTML template.",
      code: `<!-- tasks/templates/tasks/home.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Tasks</title>
  </head>
  <body>
    <h1>Welcome to the Task App</h1>
  </body>
</html>`,
    },
  },

  {
    id: 38,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Passing Data to Templates",
    type: "code",
    content: {
      description: "Send dynamic data using context.",
      code: `def home(request):
    context = {
        "username": "Student",
        "task_count": 5
    }
    return render(request, "tasks/home.html", context)`,
    },
  },

  {
    id: 39,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Using Variables in Templates",
    type: "code",
    content: {
      description: "Access context variables safely.",
      code: `<h2>Hello, {{ username }}</h2>
<p>You have {{ task_count }} tasks.</p>`,
    },
  },

  {
    id: 40,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Template Control Structures",
    type: "two-column",
    content: {
      left: {
        title: "Available Tags",
        items: ["{% if %}", "{% for %}", "{% block %}", "{% extends %}"],
      },
      right: {
        title: "Design Rule",
        items: [
          "Keep logic minimal",
          "No heavy computation",
          "Views prepare data",
          "Templates display data",
        ],
      },
    },
  },

  {
    id: 41,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Looping Over Data",
    type: "code",
    content: {
      description: "Render a list dynamically.",
      code: `{% for task in tasks %}
  <li>{{ task }}</li>
{% empty %}
  <li>No tasks available</li>
{% endfor %}`,
    },
  },

  {
    id: 42,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Template Inheritance (Base Layout)",
    type: "code",
    content: {
      description: "Create a reusable base template.",
      code: `<!-- tasks/templates/tasks/base.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>{% block title %}Task App{% endblock %}</title>
  </head>
  <body>
    <header>
      <h1>Task Manager</h1>
    </header>

    {% block content %}{% endblock %}
  </body>
</html>`,
    },
  },

  {
    id: 43,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Extending the Base Template",
    type: "code",
    content: {
      description: "Reuse layout across pages.",
      code: `{% extends "tasks/base.html" %}

{% block title %}Home{% endblock %}

{% block content %}
  <p>Welcome to your dashboard</p>
{% endblock %}`,
    },
  },

  {
    id: 44,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Putting logic in templates",
          "Wrong template paths",
          "Forgetting extends",
          "Hardcoding repeated HTML",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Prepare data in views",
          "Follow app/template structure",
          "Use base templates",
          "Keep templates clean",
        ],
      },
    },
  },

  {
    id: 45,
    moduleId: 4,
    moduleTitle: "Templates, Dynamic Content & Layouts",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Django ORM",
          "Models and databases",
          "Migrations",
          "Persisting data",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Templates rendering",
          "Dynamic content working",
          "Layouts reusable",
          "Ready for models",
        ],
      },
    },
  },
  // =========================
  // Django Module 5: Models, ORM & Database Fundamentals
  // =========================

  {
    id: 46,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "Why Databases Matter in Backend Systems",
    type: "two-column",
    content: {
      left: {
        title: "Without a Database",
        items: [
          "Data lost on restart",
          "No persistence",
          "No relationships",
          "Not production-ready",
        ],
      },
      right: {
        title: "With a Database",
        items: [
          "Persistent storage",
          "Structured data",
          "Relationships supported",
          "Scalable systems",
        ],
      },
    },
  },

  {
    id: 47,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "What Is a Django Model?",
    type: "two-column",
    content: {
      left: {
        title: "Model Explained",
        items: [
          "Python class",
          "Represents a database table",
          "Defines fields and rules",
          "Central data definition",
        ],
      },
      right: {
        title: "Why Django ORM",
        items: [
          "No raw SQL needed",
          "Database-agnostic",
          "Secure by default",
          "Readable queries",
        ],
      },
    },
  },

  {
    id: 48,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "Creating Your First Model",
    type: "code",
    content: {
      description: "Define a Task model.",
      code: `// tasks/models.py
from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title`,
    },
  },

  {
    id: 49,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "Model Fields Explained",
    type: "two-column",
    content: {
      left: {
        title: "Field Types Used",
        items: [
          "CharField → text",
          "BooleanField → true/false",
          "DateTimeField → timestamps",
          "Auto fields",
        ],
      },
      right: {
        title: "Why Field Choice Matters",
        items: [
          "Data integrity",
          "Validation",
          "Performance",
          "Correct constraints",
        ],
      },
    },
  },

  {
    id: 50,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "Registering Model Changes",
    type: "code",
    content: {
      description: "Create and apply migrations.",
      code: `python manage.py makemigrations
python manage.py migrate`,
    },
  },

  {
    id: 51,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "What Are Migrations?",
    type: "two-column",
    content: {
      left: {
        title: "Migrations Are",
        items: [
          "Version control for database",
          "Incremental schema changes",
          "Auto-generated files",
          "Safe evolution",
        ],
      },
      right: {
        title: "Why They Matter",
        items: [
          "No manual DB edits",
          "Team consistency",
          "Rollback capability",
          "Production safety",
        ],
      },
    },
  },

  {
    id: 52,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "Using Django ORM (Create)",
    type: "code",
    content: {
      description: "Create a new task record.",
      code: `Task.objects.create(title="Learn Django")`,
    },
  },

  {
    id: 53,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "Using Django ORM (Read)",
    type: "code",
    content: {
      description: "Fetch tasks from database.",
      code: `Task.objects.all()
Task.objects.filter(completed=False)`,
    },
  },

  {
    id: 54,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "Using Django ORM (Update)",
    type: "code",
    content: {
      description: "Update a task.",
      code: `task = Task.objects.get(id=1)
task.completed = True
task.save()`,
    },
  },

  {
    id: 55,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "Using Django ORM (Delete)",
    type: "code",
    content: {
      description: "Delete a task.",
      code: `Task.objects.filter(id=1).delete()`,
    },
  },

  {
    id: 56,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "Why ORM Improves Security",
    type: "two-column",
    content: {
      left: {
        title: "Without ORM",
        items: [
          "SQL injection risk",
          "Manual sanitization",
          "Verbose queries",
          "Hard to maintain",
        ],
      },
      right: {
        title: "With ORM",
        items: [
          "Automatic escaping",
          "Safe queries",
          "Readable logic",
          "Consistent behavior",
        ],
      },
    },
  },

  {
    id: 57,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting migrations",
          "Editing DB manually",
          "Overusing raw SQL",
          "Ignoring indexes",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use makemigrations",
          "Trust the ORM",
          "Model-first design",
          "Profile queries",
        ],
      },
    },
  },

  {
    id: 58,
    moduleId: 5,
    moduleTitle: "Models, ORM & Database Fundamentals",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Django Admin",
          "Managing data visually",
          "Superusers",
          "Admin customization",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Models created",
          "Database connected",
          "CRUD operations understood",
          "Ready for admin panel",
        ],
      },
    },
  },
  // =========================
  // Django Module 6: Django Admin & Data Management
  // =========================

  {
    id: 59,
    moduleId: 6,
    moduleTitle: "Django Admin & Data Management",
    title: "What Is Django Admin?",
    type: "two-column",
    content: {
      left: {
        title: "Django Admin Explained",
        items: [
          "Auto-generated management interface",
          "Built on top of your models",
          "Secure by default",
          "Ready out of the box",
        ],
      },
      right: {
        title: "Why Admin Matters",
        items: [
          "Manage data without custom UI",
          "Fast internal tooling",
          "Great for MVPs",
          "Used in production systems",
        ],
      },
    },
  },

  {
    id: 60,
    moduleId: 6,
    moduleTitle: "Django Admin & Data Management",
    title: "Creating a Superuser",
    type: "code",
    content: {
      description: "Create an admin account.",
      code: `python manage.py createsuperuser`,
    },
  },

  {
    id: 61,
    moduleId: 6,
    moduleTitle: "Django Admin & Data Management",
    title: "Accessing the Admin Panel",
    type: "two-column",
    content: {
      left: {
        title: "Admin URL",
        items: [
          "http://127.0.0.1:8000/admin/",
          "Login with superuser credentials",
          "Secured endpoint",
          "Role-based access",
        ],
      },
      right: {
        title: "What You’ll See",
        items: [
          "Registered models",
          "User management",
          "Permissions system",
          "Admin dashboard",
        ],
      },
    },
  },

  {
    id: 62,
    moduleId: 6,
    moduleTitle: "Django Admin & Data Management",
    title: "Registering Models in Admin",
    type: "code",
    content: {
      description: "Expose Task model in admin.",
      code: `// tasks/admin.py
from django.contrib import admin
from .models import Task

admin.site.register(Task)`,
    },
  },

  {
    id: 63,
    moduleId: 6,
    moduleTitle: "Django Admin & Data Management",
    title: "Why Registration Is Required",
    type: "two-column",
    content: {
      left: {
        title: "Without Registration",
        items: [
          "Model invisible in admin",
          "No data management",
          "Missed productivity gains",
          "Manual DB access needed",
        ],
      },
      right: {
        title: "With Registration",
        items: [
          "CRUD via UI",
          "Instant data visibility",
          "Faster iteration",
          "Safe management",
        ],
      },
    },
  },

  {
    id: 64,
    moduleId: 6,
    moduleTitle: "Django Admin & Data Management",
    title: "Customizing Admin Display",
    type: "code",
    content: {
      description: "Improve admin usability.",
      code: `@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ("title", "completed", "created_at")
    list_filter = ("completed",)
    search_fields = ("title",)`,
    },
  },

  {
    id: 65,
    moduleId: 6,
    moduleTitle: "Django Admin & Data Management",
    title: "What Admin Customization Solves",
    type: "two-column",
    content: {
      left: {
        title: "Default Admin",
        items: [
          "Basic list view",
          "Limited filtering",
          "No search",
          "Poor UX for large data",
        ],
      },
      right: {
        title: "Customized Admin",
        items: [
          "Faster navigation",
          "Powerful search",
          "Better filtering",
          "Production usability",
        ],
      },
    },
  },

  {
    id: 66,
    moduleId: 6,
    moduleTitle: "Django Admin & Data Management",
    title: "Admin Permissions & Security",
    type: "two-column",
    content: {
      left: {
        title: "Permission System",
        items: [
          "Add, change, delete",
          "Model-level permissions",
          "User/group based",
          "Fine-grained control",
        ],
      },
      right: {
        title: "Security Insight",
        items: [
          "Never expose admin publicly",
          "Strong passwords required",
          "HTTPS in production",
          "Audit admin access",
        ],
      },
    },
  },

  {
    id: 67,
    moduleId: 6,
    moduleTitle: "Django Admin & Data Management",
    title: "Admin vs Custom Dashboards",
    type: "two-column",
    content: {
      left: {
        title: "Django Admin",
        items: [
          "Internal tools",
          "Fast setup",
          "Limited branding",
          "Developer-friendly",
        ],
      },
      right: {
        title: "Custom Dashboards",
        items: [
          "User-facing",
          "Fully branded",
          "More control",
          "More development time",
        ],
      },
    },
  },

  {
    id: 68,
    moduleId: 6,
    moduleTitle: "Django Admin & Data Management",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Not creating superuser",
          "Exposing admin endpoint",
          "No admin customization",
          "Ignoring permissions",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Create admin early",
          "Restrict admin access",
          "Customize for productivity",
          "Use permissions properly",
        ],
      },
    },
  },

  {
    id: 69,
    moduleId: 6,
    moduleTitle: "Django Admin & Data Management",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Django Forms",
          "User input handling",
          "Validation",
          "Security basics",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Admin panel active",
          "Data manageable",
          "Permissions understood",
          "Ready for user input",
        ],
      },
    },
  },
  // =========================
  // Django Module 7: Forms, User Input & Validation
  // =========================

  {
    id: 70,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "Why Forms Matter in Web Applications",
    type: "two-column",
    content: {
      left: {
        title: "User Input Reality",
        items: [
          "Users submit data",
          "Data can be invalid",
          "Data can be malicious",
          "Data must be controlled",
        ],
      },
      right: {
        title: "What Forms Provide",
        items: [
          "Structured input handling",
          "Built-in validation",
          "Security protections",
          "Clean data processing",
        ],
      },
    },
  },

  {
    id: 71,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "Django Forms vs Raw HTML",
    type: "two-column",
    content: {
      left: {
        title: "Raw HTML Forms",
        items: [
          "Manual validation",
          "Repeated logic",
          "Error-prone",
          "Security risks",
        ],
      },
      right: {
        title: "Django Forms",
        items: [
          "Automatic validation",
          "Reusable classes",
          "CSRF protection",
          "Clean API",
        ],
      },
    },
  },

  {
    id: 72,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "Creating a Basic Django Form",
    type: "code",
    content: {
      description: "Define a form for task creation.",
      code: `// tasks/forms.py
from django import forms

class TaskForm(forms.Form):
    title = forms.CharField(max_length=255)
    completed = forms.BooleanField(required=False)`,
    },
  },

  {
    id: 73,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "Rendering a Form in a View",
    type: "code",
    content: {
      description: "Display form in a template.",
      code: `from .forms import TaskForm

def create_task(request):
    form = TaskForm()
    return render(request, "tasks/create.html", { "form": form })`,
    },
  },

  {
    id: 74,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "Handling Form Submission",
    type: "code",
    content: {
      description: "Process POST requests safely.",
      code: `def create_task(request):
    if request.method == "POST":
        form = TaskForm(request.POST)
        if form.is_valid():
            # Access cleaned data
            title = form.cleaned_data["title"]
            completed = form.cleaned_data["completed"]
    else:
        form = TaskForm()

    return render(request, "tasks/create.html", { "form": form })`,
    },
  },

  {
    id: 75,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "Form Validation Flow",
    type: "two-column",
    content: {
      left: {
        title: "Behind the Scenes",
        items: [
          "Bind POST data",
          "Run field validators",
          "Clean data",
          "Expose errors",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Never trust raw input",
          "Always call is_valid()",
          "Use cleaned_data",
          "Validation before persistence",
        ],
      },
    },
  },

  {
    id: 76,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "Displaying Form Errors",
    type: "code",
    content: {
      description: "Show validation feedback to users.",
      code: `{{ form.non_field_errors }}
{{ form.title.errors }}
{{ form.title }}`,
    },
  },

  {
    id: 77,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "CSRF Protection Explained",
    type: "two-column",
    content: {
      left: {
        title: "What CSRF Is",
        items: [
          "Cross-Site Request Forgery",
          "Unauthorized actions",
          "Uses authenticated sessions",
          "Common web attack",
        ],
      },
      right: {
        title: "How Django Protects You",
        items: [
          "CSRF tokens",
          "Automatic middleware",
          "Template tags",
          "Secure defaults",
        ],
      },
    },
  },

  {
    id: 78,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "Adding CSRF Token",
    type: "code",
    content: {
      description: "Always include CSRF token in forms.",
      code: `{% csrf_token %}`,
    },
  },

  {
    id: 79,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "Forms vs ModelForms",
    type: "two-column",
    content: {
      left: {
        title: "forms.Form",
        items: [
          "Manual field definition",
          "No DB coupling",
          "Full control",
          "Good for custom input",
        ],
      },
      right: {
        title: "forms.ModelForm",
        items: [
          "Linked to models",
          "Auto field generation",
          "Built-in save()",
          "Less boilerplate",
        ],
      },
    },
  },

  {
    id: 80,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Skipping is_valid()",
          "Trusting request.POST directly",
          "Missing CSRF token",
          "Handling logic in templates",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Validate every form",
          "Use cleaned_data",
          "Always enable CSRF",
          "Keep logic in views",
        ],
      },
    },
  },

  {
    id: 81,
    moduleId: 7,
    moduleTitle: "Forms, User Input & Validation",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Authentication",
          "User accounts",
          "Login & logout",
          "Permissions",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Forms implemented",
          "Input validated",
          "CSRF understood",
          "Ready for auth",
        ],
      },
    },
  },
  // =========================
  // Django Module 8: Authentication, Users & Permissions
  // =========================

  {
    id: 82,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "Why Authentication Is Core to Web Apps",
    type: "two-column",
    content: {
      left: {
        title: "Without Authentication",
        items: [
          "Anyone can access everything",
          "No user identity",
          "No personalization",
          "No access control",
        ],
      },
      right: {
        title: "With Authentication",
        items: [
          "Verified user identity",
          "Protected resources",
          "User-specific data",
          "Secure workflows",
        ],
      },
    },
  },

  {
    id: 83,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "Django’s Built-in Auth System",
    type: "two-column",
    content: {
      left: {
        title: "What Django Provides",
        items: [
          "User model",
          "Password hashing",
          "Session management",
          "Permission framework",
        ],
      },
      right: {
        title: "Why This Matters",
        items: [
          "Secure by default",
          "Battle-tested",
          "Less custom code",
          "Production ready",
        ],
      },
    },
  },

  {
    id: 84,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "The User Model",
    type: "two-column",
    content: {
      left: {
        title: "Default User Fields",
        items: [
          "username",
          "email",
          "password (hashed)",
          "is_active / is_staff",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Never store plain passwords",
          "Hashing is automatic",
          "User model is extensible",
          "Permissions built-in",
        ],
      },
    },
  },

  {
    id: 85,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "Creating Users Programmatically",
    type: "code",
    content: {
      description: "Create a user using Django’s API.",
      code: `from django.contrib.auth.models import User

user = User.objects.create_user(
    username="student",
    password="securepassword123"
)`,
    },
  },

  {
    id: 86,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "User Login & Logout Flow",
    type: "two-column",
    content: {
      left: {
        title: "Login",
        items: [
          "Verify credentials",
          "Create session",
          "Attach user to request",
          "Persist across requests",
        ],
      },
      right: {
        title: "Logout",
        items: [
          "Destroy session",
          "Remove user context",
          "Invalidate authentication",
          "Return to anonymous state",
        ],
      },
    },
  },

  {
    id: 87,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "Logging In a User (View)",
    type: "code",
    content: {
      description: "Authenticate and log in a user.",
      code: `from django.contrib.auth import authenticate, login

def login_user(request):
    user = authenticate(
        request,
        username="student",
        password="securepassword123"
    )
    if user:
        login(request, user)`,
    },
  },

  {
    id: 88,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "Protecting Views with Login Required",
    type: "code",
    content: {
      description: "Restrict access to authenticated users.",
      code: `from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):
    return render(request, "tasks/dashboard.html")`,
    },
  },

  {
    id: 89,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "Permissions & Authorization",
    type: "two-column",
    content: {
      left: {
        title: "Permissions",
        items: ["add_model", "change_model", "delete_model", "view_model"],
      },
      right: {
        title: "Authorization Checks",
        items: [
          "user.has_perm()",
          "Group-based permissions",
          "Admin vs user roles",
          "Fine-grained control",
        ],
      },
    },
  },

  {
    id: 90,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "Checking Permissions in Views",
    type: "code",
    content: {
      description: "Allow only users with permission.",
      code: `def delete_task(request, id):
    if not request.user.has_perm("tasks.delete_task"):
        return HttpResponse("Forbidden", status=403)`,
    },
  },

  {
    id: 91,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "Groups & Roles",
    type: "two-column",
    content: {
      left: {
        title: "Groups",
        items: [
          "Collections of permissions",
          "Assign to users",
          "Role-like behavior",
          "Managed via admin",
        ],
      },
      right: {
        title: "Common Roles",
        items: ["Admin", "Editor", "Viewer", "Custom roles"],
      },
    },
  },

  {
    id: 92,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Rolling custom auth too early",
          "Storing passwords manually",
          "Skipping permission checks",
          "Exposing protected views",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use Django auth system",
          "Leverage decorators",
          "Apply permissions consistently",
          "Audit access paths",
        ],
      },
    },
  },

  {
    id: 93,
    moduleId: 8,
    moduleTitle: "Authentication, Users & Permissions",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Class-based views",
          "Generic views",
          "Reducing boilerplate",
          "Scalable view patterns",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Users authenticated",
          "Views protected",
          "Permissions enforced",
          "Ready for CBVs",
        ],
      },
    },
  },
  // =========================
  // Django Module 9: Class-Based Views (CBVs) & Generic Views
  // =========================

  {
    id: 94,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "Why Class-Based Views Exist",
    type: "two-column",
    content: {
      left: {
        title: "Function-Based Views (FBVs)",
        items: [
          "Simple and explicit",
          "Good for small logic",
          "Can grow messy over time",
          "Harder to reuse behavior",
        ],
      },
      right: {
        title: "Class-Based Views (CBVs)",
        items: [
          "Encapsulate behavior",
          "Promote reuse",
          "More scalable",
          "Align with OOP thinking",
        ],
      },
    },
  },

  {
    id: 95,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "When to Use CBVs",
    type: "two-column",
    content: {
      left: {
        title: "Best Use Cases",
        items: [
          "CRUD views",
          "Standard patterns",
          "Reusable behavior",
          "Larger projects",
        ],
      },
      right: {
        title: "When FBVs Are Fine",
        items: [
          "Very simple endpoints",
          "One-off logic",
          "Quick prototypes",
          "Learning basics",
        ],
      },
    },
  },

  {
    id: 96,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "Your First Class-Based View",
    type: "code",
    content: {
      description: "A simple CBV using Django’s View class.",
      code: `from django.views import View
from django.http import HttpResponse

class HomeView(View):
    def get(self, request):
        return HttpResponse("Welcome to the Task App")`,
    },
  },

  {
    id: 97,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "Routing a Class-Based View",
    type: "code",
    content: {
      description: "Use as_view() to hook CBVs into URLs.",
      code: `from django.urls import path
from .views import HomeView

urlpatterns = [
    path("", HomeView.as_view())
]`,
    },
  },

  {
    id: 98,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "Understanding HTTP Methods in CBVs",
    type: "two-column",
    content: {
      left: {
        title: "Methods You Can Define",
        items: ["get()", "post()", "put()", "delete()"],
      },
      right: {
        title: "Key Insight",
        items: [
          "One method per HTTP verb",
          "Cleaner separation",
          "Easy to extend",
          "Explicit behavior",
        ],
      },
    },
  },

  {
    id: 99,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "Generic Views: Solving Repetition",
    type: "two-column",
    content: {
      left: {
        title: "Problem",
        items: [
          "Repeated CRUD logic",
          "Same patterns everywhere",
          "Boilerplate-heavy code",
          "Maintenance cost",
        ],
      },
      right: {
        title: "Generic Views",
        items: [
          "Prebuilt CRUD behavior",
          "Less code",
          "Consistent patterns",
          "Production-ready",
        ],
      },
    },
  },

  {
    id: 100,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "ListView Example",
    type: "code",
    content: {
      description: "List all tasks using ListView.",
      code: `from django.views.generic import ListView
from .models import Task

class TaskListView(ListView):
    model = Task
    template_name = "tasks/task_list.html"`,
    },
  },

  {
    id: 101,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "CreateView Example",
    type: "code",
    content: {
      description: "Create new tasks easily.",
      code: `from django.views.generic import CreateView
from .models import Task

class TaskCreateView(CreateView):
    model = Task
    fields = ["title", "completed"]
    success_url = "/" `,
    },
  },

  {
    id: 102,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "UpdateView & DeleteView",
    type: "code",
    content: {
      description: "Update and delete tasks.",
      code: `from django.views.generic import UpdateView, DeleteView

class TaskUpdateView(UpdateView):
    model = Task
    fields = ["title", "completed"]

class TaskDeleteView(DeleteView):
    model = Task
    success_url = "/" `,
    },
  },

  {
    id: 103,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "Why Generic Views Are Powerful",
    type: "two-column",
    content: {
      left: {
        title: "What You Get",
        items: [
          "Built-in validation",
          "ORM integration",
          "Template conventions",
          "Less boilerplate",
        ],
      },
      right: {
        title: "Trade-offs",
        items: [
          "Less explicit code",
          "Learning curve",
          "Magic behavior",
          "Customization requires knowledge",
        ],
      },
    },
  },

  {
    id: 104,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Overusing CBVs blindly",
          "Not understanding as_view()",
          "Fighting generic views",
          "Mixing FBVs and CBVs randomly",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Understand fundamentals first",
          "Use CBVs for patterns",
          "Override only when needed",
          "Stay consistent",
        ],
      },
    },
  },

  {
    id: 105,
    moduleId: 9,
    moduleTitle: "Class-Based Views & Generic Views",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Django REST Framework",
          "APIs with Django",
          "Serializers",
          "API views",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "CBVs understood",
          "Generic views applied",
          "Cleaner CRUD code",
          "Ready for APIs",
        ],
      },
    },
  },
  // =========================
  // Django Module 10: Django REST Framework (DRF) Fundamentals
  // =========================

  {
    id: 106,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "Why Django REST Framework Exists",
    type: "two-column",
    content: {
      left: {
        title: "Traditional Django",
        items: [
          "HTML-first rendering",
          "Tightly coupled UI",
          "Harder to serve multiple clients",
          "Limited API tooling",
        ],
      },
      right: {
        title: "DRF Approach",
        items: [
          "API-first design",
          "JSON responses",
          "Frontend agnostic",
          "Built for mobile & web clients",
        ],
      },
    },
  },

  {
    id: 107,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "What DRF Provides",
    type: "two-column",
    content: {
      left: {
        title: "Core Features",
        items: [
          "Serializers",
          "APIView & ViewSets",
          "Authentication & permissions",
          "Browsable API",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Less boilerplate",
          "Standardized APIs",
          "Security built-in",
          "Industry standard",
        ],
      },
    },
  },

  {
    id: 108,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "Installing Django REST Framework",
    type: "code",
    content: {
      description: "Install DRF into your virtual environment.",
      code: `pip install djangorestframework`,
    },
  },

  {
    id: 109,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "Registering DRF",
    type: "code",
    content: {
      description: "Add DRF to INSTALLED_APPS.",
      code: `// core/settings.py
INSTALLED_APPS = [
  ...
  "rest_framework",
]`,
    },
  },

  {
    id: 110,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "What Is an API?",
    type: "two-column",
    content: {
      left: {
        title: "API Basics",
        items: [
          "Application Programming Interface",
          "Contract between systems",
          "Uses HTTP verbs",
          "Returns data (JSON)",
        ],
      },
      right: {
        title: "API Clients",
        items: [
          "Web frontends",
          "Mobile apps",
          "Other servers",
          "Third-party integrations",
        ],
      },
    },
  },

  {
    id: 111,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "Serializers Explained",
    type: "two-column",
    content: {
      left: {
        title: "Serializer Role",
        items: [
          "Convert models to JSON",
          "Validate input data",
          "Deserialize requests",
          "Enforce schema",
        ],
      },
      right: {
        title: "Why Not Use Models Directly",
        items: [
          "Models are DB-focused",
          "APIs need control",
          "Validation separation",
          "Security boundaries",
        ],
      },
    },
  },

  {
    id: 112,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "Creating a ModelSerializer",
    type: "code",
    content: {
      description: "Expose Task model as JSON.",
      code: `// tasks/serializers.py
from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"`,
    },
  },

  {
    id: 113,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "Your First API View",
    type: "code",
    content: {
      description: "Return JSON instead of HTML.",
      code: `from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

class TaskListAPI(APIView):
    def get(self, request):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)`,
    },
  },

  {
    id: 114,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "Routing API Views",
    type: "code",
    content: {
      description: "Expose the API endpoint.",
      code: `// tasks/urls.py
from django.urls import path
from .api import TaskListAPI

urlpatterns = [
    path("api/tasks/", TaskListAPI.as_view())
]`,
    },
  },

  {
    id: 115,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "Browsable API (DRF Superpower)",
    type: "two-column",
    content: {
      left: {
        title: "What You Get",
        items: [
          "Interactive API UI",
          "Form-based testing",
          "Immediate feedback",
          "Great for learning",
        ],
      },
      right: {
        title: "Why It’s Useful",
        items: [
          "Debug faster",
          "Test endpoints easily",
          "Understand payloads",
          "Client-free testing",
        ],
      },
    },
  },

  {
    id: 116,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "HTTP Methods Recap",
    type: "two-column",
    content: {
      left: {
        title: "Methods",
        items: [
          "GET → retrieve",
          "POST → create",
          "PUT/PATCH → update",
          "DELETE → remove",
        ],
      },
      right: {
        title: "API Principle",
        items: [
          "One endpoint, many verbs",
          "Stateless requests",
          "Predictable behavior",
          "RESTful design",
        ],
      },
    },
  },

  {
    id: 117,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Returning raw QuerySets",
          "Skipping serializers",
          "Mixing HTML & JSON",
          "No API versioning",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Always serialize data",
          "Separate API logic",
          "JSON-only endpoints",
          "Design for clients",
        ],
      },
    },
  },

  {
    id: 118,
    moduleId: 10,
    moduleTitle: "Django REST Framework (DRF) Fundamentals",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: ["ViewSets", "Routers", "Cleaner APIs", "CRUD in minutes"],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "DRF installed",
          "First API built",
          "Serializers understood",
          "Ready for ViewSets",
        ],
      },
    },
  },
  // =========================
  // Django Module 11: ViewSets, Routers & CRUD APIs
  // =========================

  {
    id: 119,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "Why ViewSets Exist",
    type: "two-column",
    content: {
      left: {
        title: "Problem with APIViews",
        items: [
          "Repeated CRUD code",
          "Manual HTTP method handling",
          "Harder to scale endpoints",
          "More boilerplate",
        ],
      },
      right: {
        title: "What ViewSets Solve",
        items: [
          "Automatic CRUD mapping",
          "Convention over configuration",
          "Cleaner APIs",
          "Less code",
        ],
      },
    },
  },

  {
    id: 120,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "What Is a ViewSet?",
    type: "two-column",
    content: {
      left: {
        title: "ViewSet Explained",
        items: [
          "Class-based API abstraction",
          "Handles multiple actions",
          "Maps HTTP verbs automatically",
          "Works with routers",
        ],
      },
      right: {
        title: "Key Actions",
        items: [
          "list",
          "retrieve",
          "create",
          "update / partial_update",
          "destroy",
        ],
      },
    },
  },

  {
    id: 121,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "Creating a ModelViewSet",
    type: "code",
    content: {
      description: "Full CRUD with minimal code.",
      code: `// tasks/api.py
from rest_framework.viewsets import ModelViewSet
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer`,
    },
  },

  {
    id: 122,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "Why ModelViewSet Is Powerful",
    type: "two-column",
    content: {
      left: {
        title: "What You Get Automatically",
        items: [
          "GET /tasks/",
          "GET /tasks/{id}/",
          "POST /tasks/",
          "PUT/PATCH /tasks/{id}/",
          "DELETE /tasks/{id}/",
        ],
      },
      right: {
        title: "Behind the Scenes",
        items: [
          "Serializer validation",
          "ORM integration",
          "HTTP status codes",
          "Consistent behavior",
        ],
      },
    },
  },

  {
    id: 123,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "Using Routers",
    type: "code",
    content: {
      description: "Routers generate URLs automatically.",
      code: `// core/urls.py
from rest_framework.routers import DefaultRouter
from tasks.api import TaskViewSet

router = DefaultRouter()
router.register("tasks", TaskViewSet)

urlpatterns = router.urls`,
    },
  },

  {
    id: 124,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "Why Routers Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without Routers",
        items: [
          "Manual URL mapping",
          "Higher error risk",
          "More boilerplate",
          "Inconsistent patterns",
        ],
      },
      right: {
        title: "With Routers",
        items: [
          "Auto-generated endpoints",
          "Standard REST patterns",
          "Cleaner urls.py",
          "Faster development",
        ],
      },
    },
  },

  {
    id: 125,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "Browsable API with ViewSets",
    type: "two-column",
    content: {
      left: {
        title: "What You See",
        items: [
          "List & detail views",
          "POST forms",
          "PUT/PATCH forms",
          "DELETE actions",
        ],
      },
      right: {
        title: "Why It’s Powerful",
        items: [
          "No frontend needed",
          "Immediate feedback",
          "Learning accelerator",
          "Debugging tool",
        ],
      },
    },
  },

  {
    id: 126,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "Adding Permissions to ViewSets",
    type: "code",
    content: {
      description: "Protect API endpoints.",
      code: `from rest_framework.permissions import IsAuthenticated

class TaskViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer`,
    },
  },

  {
    id: 127,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "Filtering QuerySets",
    type: "code",
    content: {
      description: "Customize queryset behavior.",
      code: `def get_queryset(self):
    return Task.objects.filter(completed=False)`,
    },
  },

  {
    id: 128,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "Why ViewSets Scale Well",
    type: "two-column",
    content: {
      left: {
        title: "Scaling Benefits",
        items: [
          "Consistent patterns",
          "Easier onboarding",
          "Less duplicated logic",
          "Cleaner codebase",
        ],
      },
      right: {
        title: "Enterprise Insight",
        items: [
          "Standardized APIs",
          "Predictable behavior",
          "Security integration",
          "Maintainability",
        ],
      },
    },
  },

  {
    id: 129,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Over-customizing early",
          "Skipping permissions",
          "Not understanding CRUD actions",
          "Hardcoding URLs",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use defaults first",
          "Add permissions early",
          "Understand actions",
          "Let routers handle URLs",
        ],
      },
    },
  },

  {
    id: 130,
    moduleId: 11,
    moduleTitle: "ViewSets, Routers & CRUD APIs",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Authentication in DRF",
          "JWT & token auth",
          "Securing APIs",
          "User-specific data",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "CRUD API built",
          "ViewSets mastered",
          "Routers understood",
          "Ready for auth",
        ],
      },
    },
  },
  // =========================
  // Django Module 12: Authentication & Authorization in DRF
  // =========================

  {
    id: 131,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "Why API Authentication Is Different",
    type: "two-column",
    content: {
      left: {
        title: "Traditional Django Auth",
        items: [
          "Session-based",
          "Cookie-driven",
          "Browser-oriented",
          "Tied to templates",
        ],
      },
      right: {
        title: "API Authentication",
        items: [
          "Token-based",
          "Stateless",
          "Client-agnostic",
          "Mobile & SPA friendly",
        ],
      },
    },
  },

  {
    id: 132,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "DRF Authentication Mechanisms",
    type: "two-column",
    content: {
      left: {
        title: "Built-in Options",
        items: [
          "SessionAuthentication",
          "BasicAuthentication",
          "TokenAuthentication",
        ],
      },
      right: {
        title: "Modern Practice",
        items: [
          "JWT authentication",
          "Stateless APIs",
          "Short-lived tokens",
          "Refresh strategies",
        ],
      },
    },
  },

  {
    id: 133,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "Installing JWT Support",
    type: "code",
    content: {
      description: "Use Simple JWT for modern token auth.",
      code: `pip install djangorestframework-simplejwt`,
    },
  },

  {
    id: 134,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "Configuring JWT Authentication",
    type: "code",
    content: {
      description: "Enable JWT in DRF settings.",
      code: `// core/settings.py
from datetime import timedelta

REST_FRAMEWORK = {
  "DEFAULT_AUTHENTICATION_CLASSES": (
    "rest_framework_simplejwt.authentication.JWTAuthentication",
  ),
}

SIMPLE_JWT = {
  "ACCESS_TOKEN_LIFETIME": timedelta(minutes=15),
  "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
}`,
    },
  },

  {
    id: 135,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "JWT Token Endpoints",
    type: "code",
    content: {
      description: "Expose login and refresh endpoints.",
      code: `from rest_framework_simplejwt.views import (
  TokenObtainPairView,
  TokenRefreshView
)

urlpatterns = [
  path("api/token/", TokenObtainPairView.as_view()),
  path("api/token/refresh/", TokenRefreshView.as_view()),
]`,
    },
  },

  {
    id: 136,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "Using JWT in Requests",
    type: "two-column",
    content: {
      left: {
        title: "Client Behavior",
        items: [
          "Login to obtain token",
          "Store access token securely",
          "Send token in Authorization header",
          "Refresh when expired",
        ],
      },
      right: {
        title: "Header Format",
        items: [
          "Authorization: Bearer <token>",
          "Sent on every request",
          "Stateless verification",
          "No server session",
        ],
      },
    },
  },

  {
    id: 137,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "Protecting API Endpoints",
    type: "code",
    content: {
      description: "Require authentication for APIs.",
      code: `from rest_framework.permissions import IsAuthenticated

class TaskViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer`,
    },
  },

  {
    id: 138,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "Authorization with Permissions",
    type: "two-column",
    content: {
      left: {
        title: "Permission Types",
        items: [
          "AllowAny",
          "IsAuthenticated",
          "IsAdminUser",
          "Custom permissions",
        ],
      },
      right: {
        title: "Purpose",
        items: [
          "Restrict access",
          "Protect sensitive actions",
          "Enforce business rules",
          "Prevent privilege escalation",
        ],
      },
    },
  },

  {
    id: 139,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "Custom Permission Example",
    type: "code",
    content: {
      description: "Allow only owners to modify tasks.",
      code: `from rest_framework.permissions import BasePermission

class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user`,
    },
  },

  {
    id: 140,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "Applying Custom Permissions",
    type: "code",
    content: {
      description: "Enforce ownership rules.",
      code: `class TaskViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated, IsOwner]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer`,
    },
  },

  {
    id: 141,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "Common Security Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Leaving APIs public",
          "Long-lived access tokens",
          "No refresh tokens",
          "Trusting client identity",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Protect endpoints by default",
          "Short token lifetimes",
          "Use refresh tokens",
          "Validate every request",
        ],
      },
    },
  },

  {
    id: 142,
    moduleId: 12,
    moduleTitle: "Authentication & Authorization in DRF",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "API validation",
          "Serializers deep dive",
          "Error handling",
          "Data integrity",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "JWT implemented",
          "APIs secured",
          "Permissions enforced",
          "Ready for validation",
        ],
      },
    },
  },
  // =========================
  // Django Module 13: Serializer Validation, Errors & Data Integrity
  // =========================

  {
    id: 143,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "Why Validation Is Critical in APIs",
    type: "two-column",
    content: {
      left: {
        title: "Without Validation",
        items: [
          "Invalid data stored",
          "Unexpected crashes",
          "Security vulnerabilities",
          "Unreliable APIs",
        ],
      },
      right: {
        title: "With Validation",
        items: [
          "Clean, predictable data",
          "Clear client feedback",
          "Safer APIs",
          "Production confidence",
        ],
      },
    },
  },

  {
    id: 144,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "Where Validation Happens in DRF",
    type: "two-column",
    content: {
      left: {
        title: "Validation Layers",
        items: [
          "Serializer field validation",
          "Object-level validation",
          "Model constraints",
          "Database constraints",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Validate early",
          "Fail fast",
          "Protect the database",
          "Never trust client input",
        ],
      },
    },
  },

  {
    id: 145,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "Field-Level Validation",
    type: "code",
    content: {
      description: "Validate a single field explicitly.",
      code: `from rest_framework import serializers

class TaskSerializer(serializers.ModelSerializer):
    title = serializers.CharField(min_length=3)

    class Meta:
        model = Task
        fields = "__all__"`,
    },
  },

  {
    id: 146,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "Custom Field Validator Method",
    type: "code",
    content: {
      description: "Use validate_<fieldname> for custom rules.",
      code: `class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"

    def validate_title(self, value):
        if "test" in value.lower():
            raise serializers.ValidationError("Title cannot contain 'test'")
        return value`,
    },
  },

  {
    id: 147,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "Object-Level Validation",
    type: "code",
    content: {
      description: "Validate multiple fields together.",
      code: `class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"

    def validate(self, data):
        if data.get("completed") and not data.get("title"):
            raise serializers.ValidationError("Completed tasks must have a title")
        return data`,
    },
  },

  {
    id: 148,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "What Happens When Validation Fails",
    type: "two-column",
    content: {
      left: {
        title: "DRF Behavior",
        items: [
          "Raises ValidationError",
          "Returns HTTP 400",
          "Error details in response",
          "No database write",
        ],
      },
      right: {
        title: "Why This Is Good",
        items: [
          "Client knows what failed",
          "System stays consistent",
          "No partial writes",
          "Clear contract",
        ],
      },
    },
  },

  {
    id: 149,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "Standard Validation Error Response",
    type: "code",
    content: {
      description: "Typical DRF error payload.",
      code: `{
  "title": [
    "Ensure this field has at least 3 characters."
  ]
}`,
    },
  },

  {
    id: 150,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "Model-Level Constraints",
    type: "two-column",
    content: {
      left: {
        title: "Examples",
        items: ["unique=True", "null=False", "blank=False", "db_index=True"],
      },
      right: {
        title: "Why Use Them",
        items: [
          "Last line of defense",
          "Database-enforced rules",
          "Prevent race conditions",
          "Guarantee integrity",
        ],
      },
    },
  },

  {
    id: 151,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "Handling Integrity Errors Gracefully",
    type: "two-column",
    content: {
      left: {
        title: "Bad Practice",
        items: [
          "Unhandled 500 errors",
          "Cryptic DB messages",
          "Client confusion",
          "Poor UX",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Catch exceptions",
          "Return clear messages",
          "Use proper status codes",
          "Log internally",
        ],
      },
    },
  },

  {
    id: 152,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "Validation vs Business Logic",
    type: "two-column",
    content: {
      left: {
        title: "Validation",
        items: [
          "Is data acceptable?",
          "Shape & rules",
          "Serializer responsibility",
          "Pre-save checks",
        ],
      },
      right: {
        title: "Business Logic",
        items: [
          "What should happen?",
          "Domain rules",
          "Views / services",
          "Post-validation logic",
        ],
      },
    },
  },

  {
    id: 153,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Skipping validation",
          "Validating in views only",
          "Relying only on frontend",
          "Returning 500 for bad input",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Validate in serializers",
          "Use DRF exceptions",
          "Assume hostile input",
          "Return 400 errors clearly",
        ],
      },
    },
  },

  {
    id: 154,
    moduleId: 13,
    moduleTitle: "Serializer Validation, Errors & Data Integrity",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Filtering & pagination",
          "Searching APIs",
          "Optimizing responses",
          "Scalable querying",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Strong validation in place",
          "Cleaner error handling",
          "Data integrity protected",
          "Ready for scaling APIs",
        ],
      },
    },
  },
  // =========================
  // Django Module 14: Filtering, Pagination & Query Optimization
  // =========================

  {
    id: 155,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "Why Filtering & Pagination Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without Optimization",
        items: [
          "Large payloads",
          "Slow responses",
          "High memory usage",
          "Poor user experience",
        ],
      },
      right: {
        title: "With Optimization",
        items: [
          "Faster APIs",
          "Predictable responses",
          "Lower server load",
          "Scalable systems",
        ],
      },
    },
  },

  {
    id: 156,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "Basic Query Filtering",
    type: "code",
    content: {
      description: "Filter data at the database level.",
      code: `Task.objects.filter(completed=True)
Task.objects.filter(title__icontains="django")`,
    },
  },

  {
    id: 157,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "Why Database-Level Filtering Is Critical",
    type: "two-column",
    content: {
      left: {
        title: "Bad Practice",
        items: [
          "Fetching all records",
          "Filtering in Python",
          "High memory usage",
          "Slow performance",
        ],
      },
      right: {
        title: "Good Practice",
        items: [
          "Filter in ORM",
          "Let DB do the work",
          "Indexed queries",
          "Efficient execution",
        ],
      },
    },
  },

  {
    id: 158,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "Filtering in DRF Views",
    type: "code",
    content: {
      description: "Override get_queryset for filtering.",
      code: `def get_queryset(self):
    completed = self.request.query_params.get("completed")
    queryset = Task.objects.all()

    if completed is not None:
        queryset = queryset.filter(completed=completed)

    return queryset`,
    },
  },

  {
    id: 159,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "Pagination Problem Explained",
    type: "two-column",
    content: {
      left: {
        title: "No Pagination",
        items: ["Huge responses", "Timeouts", "Client overload", "Poor UX"],
      },
      right: {
        title: "With Pagination",
        items: [
          "Small responses",
          "Fast loads",
          "Incremental fetch",
          "User-friendly APIs",
        ],
      },
    },
  },

  {
    id: 160,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "Enabling Pagination in DRF",
    type: "code",
    content: {
      description: "Configure pagination globally.",
      code: `// core/settings.py
REST_FRAMEWORK = {
  "DEFAULT_PAGINATION_CLASS":
    "rest_framework.pagination.PageNumberPagination",
  "PAGE_SIZE": 10
}`,
    },
  },

  {
    id: 161,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "Paginated API Response Shape",
    type: "code",
    content: {
      description: "Standard DRF pagination format.",
      code: `{
  "count": 42,
  "next": "/api/tasks/?page=2",
  "previous": null,
  "results": [...]
}`,
    },
  },

  {
    id: 162,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "LimitOffset Pagination",
    type: "two-column",
    content: {
      left: {
        title: "How It Works",
        items: [
          "limit controls size",
          "offset controls start",
          "Client-controlled pagination",
          "Flexible queries",
        ],
      },
      right: {
        title: "When to Use",
        items: [
          "Infinite scrolling",
          "Large datasets",
          "Mobile clients",
          "Custom UX",
        ],
      },
    },
  },

  {
    id: 163,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "Avoiding N+1 Query Problem",
    type: "two-column",
    content: {
      left: {
        title: "N+1 Problem",
        items: [
          "One query for list",
          "One query per item",
          "Explodes DB calls",
          "Kills performance",
        ],
      },
      right: {
        title: "Solutions",
        items: [
          "select_related",
          "prefetch_related",
          "Query inspection",
          "Profiling",
        ],
      },
    },
  },

  {
    id: 164,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "Optimizing Queries Example",
    type: "code",
    content: {
      description: "Reduce DB hits for relations.",
      code: `Task.objects.select_related("user")
Task.objects.prefetch_related("tags")`,
    },
  },

  {
    id: 165,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "Indexing for Performance",
    type: "two-column",
    content: {
      left: {
        title: "Indexes Help With",
        items: ["Filtering", "Sorting", "Joins", "Large tables"],
      },
      right: {
        title: "Index Caution",
        items: [
          "Slower writes",
          "More storage",
          "Index only what’s needed",
          "Measure first",
        ],
      },
    },
  },

  {
    id: 166,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "Common Performance Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Returning all records",
          "Ignoring pagination",
          "N+1 queries",
          "Over-indexing",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Always paginate",
          "Filter early",
          "Profile queries",
          "Optimize incrementally",
        ],
      },
    },
  },

  {
    id: 167,
    moduleId: 14,
    moduleTitle: "Filtering, Pagination & Query Optimization",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Testing Django apps",
          "Unit & API tests",
          "Test-driven mindset",
          "Quality assurance",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Efficient queries",
          "Paginated APIs",
          "Optimized performance",
          "Ready for testing",
        ],
      },
    },
  },
  // =========================
  // Django Module 15: Testing Django & DRF Applications
  // =========================

  {
    id: 168,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "Why Testing Matters in Backend Development",
    type: "two-column",
    content: {
      left: {
        title: "Without Tests",
        items: [
          "Hidden bugs",
          "Fear of refactoring",
          "Unreliable deployments",
          "Production incidents",
        ],
      },
      right: {
        title: "With Tests",
        items: [
          "Confidence in changes",
          "Early bug detection",
          "Stable releases",
          "Professional workflows",
        ],
      },
    },
  },

  {
    id: 169,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "Types of Tests in Django",
    type: "two-column",
    content: {
      left: {
        title: "Test Categories",
        items: [
          "Unit tests",
          "Integration tests",
          "API tests",
          "End-to-end tests",
        ],
      },
      right: {
        title: "Focus for This Course",
        items: [
          "Unit tests",
          "API tests",
          "Model tests",
          "View & serializer tests",
        ],
      },
    },
  },

  {
    id: 170,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "Django’s Built-in Test Framework",
    type: "two-column",
    content: {
      left: {
        title: "What Django Provides",
        items: [
          "TestCase class",
          "Isolated test database",
          "Test client",
          "Assertions",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Tests do not touch real DB",
          "Fast execution",
          "Repeatable runs",
          "CI-friendly",
        ],
      },
    },
  },

  {
    id: 171,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "Running Tests",
    type: "code",
    content: {
      description: "Execute all tests in the project.",
      code: `python manage.py test`,
    },
  },

  {
    id: 172,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "Testing Models",
    type: "code",
    content: {
      description: "Ensure model behavior is correct.",
      code: `from django.test import TestCase
from .models import Task

class TaskModelTest(TestCase):
    def test_task_creation(self):
        task = Task.objects.create(title="Test task")
        self.assertEqual(task.title, "Test task")`,
    },
  },

  {
    id: 173,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "Why Model Tests Are Important",
    type: "two-column",
    content: {
      left: {
        title: "Model Risks",
        items: [
          "Wrong defaults",
          "Broken constraints",
          "Unexpected behavior",
          "Data integrity issues",
        ],
      },
      right: {
        title: "Model Test Benefits",
        items: [
          "Validate schema rules",
          "Protect business logic",
          "Early failure detection",
          "Confidence in migrations",
        ],
      },
    },
  },

  {
    id: 174,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "Testing API Endpoints (DRF)",
    type: "code",
    content: {
      description: "Test API responses using DRF client.",
      code: `from rest_framework.test import APITestCase
from rest_framework import status

class TaskAPITest(APITestCase):
    def test_get_tasks(self):
        response = self.client.get("/api/tasks/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)`,
    },
  },

  {
    id: 175,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "What to Assert in API Tests",
    type: "two-column",
    content: {
      left: {
        title: "Common Assertions",
        items: [
          "Status codes",
          "Response structure",
          "Returned data",
          "Error messages",
        ],
      },
      right: {
        title: "Testing Principle",
        items: [
          "Test behavior, not implementation",
          "Focus on contracts",
          "Assume hostile clients",
          "Cover edge cases",
        ],
      },
    },
  },

  {
    id: 176,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "Testing Authenticated APIs",
    type: "code",
    content: {
      description: "Force authentication in tests.",
      code: `from django.contrib.auth.models import User

user = User.objects.create_user(
    username="testuser",
    password="password123"
)

self.client.force_authenticate(user=user)`,
    },
  },

  {
    id: 177,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "Testing Failure Cases",
    type: "two-column",
    content: {
      left: {
        title: "Why Test Failures",
        items: [
          "Clients misuse APIs",
          "Invalid input is common",
          "Security relies on rejections",
          "Errors must be predictable",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "400 for bad input",
          "401 for unauthenticated",
          "403 for forbidden",
          "404 for missing resources",
        ],
      },
    },
  },

  {
    id: 178,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "Test Coverage Philosophy",
    type: "two-column",
    content: {
      left: {
        title: "Don’t Test Everything",
        items: [
          "Avoid redundant tests",
          "Focus on critical paths",
          "Skip framework internals",
          "Balance effort",
        ],
      },
      right: {
        title: "Do Test",
        items: ["Business logic", "API contracts", "Permissions", "Edge cases"],
      },
    },
  },

  {
    id: 179,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "Common Beginner Testing Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "No tests at all",
          "Testing implementation details",
          "Using production DB",
          "Skipping auth tests",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Test early and often",
          "Test public behavior",
          "Use test database",
          "Include auth & permissions",
        ],
      },
    },
  },

  {
    id: 180,
    moduleId: 15,
    moduleTitle: "Testing Django & DRF Applications",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Deployment",
          "Environment configs",
          "Production settings",
          "Going live",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Tests written",
          "APIs verified",
          "Failures handled",
          "Ready for deployment",
        ],
      },
    },
  },
  // =========================
  // Django Module 16: Deployment, Environment & Production Readiness
  // =========================

  {
    id: 181,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "What Deployment Actually Means",
    type: "two-column",
    content: {
      left: {
        title: "Development",
        items: [
          "Runs on localhost",
          "Debug mode enabled",
          "SQLite often used",
          "Single developer",
        ],
      },
      right: {
        title: "Production",
        items: [
          "Runs on remote servers",
          "Debug disabled",
          "Real database",
          "Real users & traffic",
        ],
      },
    },
  },

  {
    id: 182,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "Why Production Configuration Matters",
    type: "two-column",
    content: {
      left: {
        title: "If Done Wrong",
        items: ["Security leaks", "App crashes", "Data loss", "Downtime"],
      },
      right: {
        title: "If Done Right",
        items: [
          "Secure system",
          "Stable performance",
          "Predictable behavior",
          "Scalable foundation",
        ],
      },
    },
  },

  {
    id: 183,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "Environment Variables Explained",
    type: "two-column",
    content: {
      left: {
        title: "What They Are",
        items: [
          "External configuration values",
          "Not hardcoded in code",
          "Environment-specific",
          "Secure by design",
        ],
      },
      right: {
        title: "What Goes Into Env Vars",
        items: ["SECRET_KEY", "DATABASE_URL", "DEBUG flag", "API keys"],
      },
    },
  },

  {
    id: 184,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "Using Environment Variables in Django",
    type: "code",
    content: {
      description: "Read configuration from environment.",
      code: `import os

SECRET_KEY = os.environ.get("SECRET_KEY")
DEBUG = os.environ.get("DEBUG") == "True"`,
    },
  },

  {
    id: 185,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "Why DEBUG Must Be False in Production",
    type: "two-column",
    content: {
      left: {
        title: "DEBUG=True Risks",
        items: [
          "Sensitive data exposed",
          "Stack traces leaked",
          "Security vulnerabilities",
          "Attack surface increased",
        ],
      },
      right: {
        title: "DEBUG=False Benefits",
        items: [
          "Safe error pages",
          "Hidden internals",
          "Production safety",
          "Compliance-ready",
        ],
      },
    },
  },

  {
    id: 186,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "Allowed Hosts",
    type: "two-column",
    content: {
      left: {
        title: "Purpose",
        items: [
          "Prevent host header attacks",
          "Restrict domains",
          "Required in production",
          "Security layer",
        ],
      },
      right: {
        title: "Example",
        items: [
          "example.com",
          "api.example.com",
          "Render / Railway domains",
          "Load balancers",
        ],
      },
    },
  },

  {
    id: 187,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "Configuring ALLOWED_HOSTS",
    type: "code",
    content: {
      description: "Set allowed domains.",
      code: `ALLOWED_HOSTS = ["example.com", "api.example.com"]`,
    },
  },

  {
    id: 188,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "Static Files in Production",
    type: "two-column",
    content: {
      left: {
        title: "Static Files",
        items: ["CSS", "JavaScript", "Images", "Fonts"],
      },
      right: {
        title: "Production Handling",
        items: [
          "Collected centrally",
          "Served via CDN or server",
          "Not via runserver",
          "Optimized delivery",
        ],
      },
    },
  },

  {
    id: 189,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "Collecting Static Files",
    type: "code",
    content: {
      description: "Prepare static assets for production.",
      code: `python manage.py collectstatic`,
    },
  },

  {
    id: 190,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "WSGI & ASGI Explained",
    type: "two-column",
    content: {
      left: {
        title: "WSGI",
        items: [
          "Synchronous",
          "Traditional Django",
          "Gunicorn / uWSGI",
          "Most APIs",
        ],
      },
      right: {
        title: "ASGI",
        items: [
          "Asynchronous",
          "WebSockets support",
          "Real-time features",
          "Daphne / Uvicorn",
        ],
      },
    },
  },

  {
    id: 191,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "Common Beginner Deployment Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Hardcoding secrets",
          "Leaving DEBUG on",
          "Serving static files incorrectly",
          "Skipping environment separation",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use env variables",
          "Disable DEBUG",
          "Collect static files",
          "Follow production checklist",
        ],
      },
    },
  },

  {
    id: 192,
    moduleId: 16,
    moduleTitle: "Deployment, Environment & Production Readiness",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Monitoring & logging",
          "Error tracking",
          "Health checks",
          "Operational maturity",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Production concepts understood",
          "Safe configuration applied",
          "Deployment-ready mindset",
          "Ready for operations",
        ],
      },
    },
  },
  // =========================
  // Django Module 17: Monitoring, Logging & Operational Best Practices
  // =========================

  {
    id: 193,
    moduleId: 17,
    moduleTitle: "Monitoring, Logging & Operational Best Practices",
    title: "Why Monitoring Matters in Production",
    type: "two-column",
    content: {
      left: {
        title: "Without Monitoring",
        items: [
          "Silent failures",
          "Users report issues first",
          "No visibility into errors",
          "Reactive firefighting",
        ],
      },
      right: {
        title: "With Monitoring",
        items: [
          "Early issue detection",
          "Clear system visibility",
          "Faster incident response",
          "Proactive maintenance",
        ],
      },
    },
  },

  {
    id: 194,
    moduleId: 17,
    moduleTitle: "Monitoring, Logging & Operational Best Practices",
    title: "Logging vs Monitoring vs Alerting",
    type: "two-column",
    content: {
      left: {
        title: "Logging",
        items: [
          "Record what happened",
          "Detailed event history",
          "Used for debugging",
          "Post-incident analysis",
        ],
      },
      right: {
        title: "Monitoring & Alerting",
        items: [
          "Measure system health",
          "Detect abnormal behavior",
          "Trigger notifications",
          "Prevent downtime",
        ],
      },
    },
  },

  {
    id: 195,
    moduleId: 17,
    moduleTitle: "Monitoring, Logging & Operational Best Practices",
    title: "Django Logging Basics",
    type: "two-column",
    content: {
      left: {
        title: "What Django Uses",
        items: [
          "Python logging module",
          "Configurable log levels",
          "Multiple handlers",
          "Production-grade support",
        ],
      },
      right: {
        title: "Log Levels",
        items: ["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"],
      },
    },
  },

  {
    id: 196,
    moduleId: 17,
    moduleTitle: "Monitoring, Logging & Operational Best Practices",
    title: "Basic Logging Configuration",
    type: "code",
    content: {
      description: "Minimal production logging setup.",
      code: `LOGGING = {
  "version": 1,
  "disable_existing_loggers": False,
  "handlers": {
    "console": {
      "class": "logging.StreamHandler",
    },
  },
  "root": {
    "handlers": ["console"],
    "level": "INFO",
  },
}`,
    },
  },

  {
    id: 197,
    moduleId: 17,
    moduleTitle: "Monitoring, Logging & Operational Best Practices",
    title: "What to Log (and What Not to Log)",
    type: "two-column",
    content: {
      left: {
        title: "Log These",
        items: [
          "Errors & exceptions",
          "Authentication events",
          "External service failures",
          "Critical business actions",
        ],
      },
      right: {
        title: "Do NOT Log",
        items: [
          "Passwords",
          "JWT tokens",
          "Personal health data",
          "Sensitive identifiers",
        ],
      },
    },
  },

  {
    id: 198,
    moduleId: 17,
    moduleTitle: "Monitoring, Logging & Operational Best Practices",
    title: "Centralized Logging",
    type: "two-column",
    content: {
      left: {
        title: "Why Centralize Logs",
        items: [
          "Single source of truth",
          "Easier debugging",
          "Historical analysis",
          "Team visibility",
        ],
      },
      right: {
        title: "Common Tools",
        items: ["Sentry", "Datadog", "Loggly", "Elastic Stack"],
      },
    },
  },

  {
    id: 199,
    moduleId: 17,
    moduleTitle: "Monitoring, Logging & Operational Best Practices",
    title: "Error Tracking with Sentry (Conceptual)",
    type: "two-column",
    content: {
      left: {
        title: "What Sentry Does",
        items: [
          "Captures exceptions",
          "Provides stack traces",
          "Groups similar errors",
          "Tracks error frequency",
        ],
      },
      right: {
        title: "Why Teams Use It",
        items: [
          "Immediate visibility",
          "Context-rich errors",
          "Production-safe debugging",
          "Reduced MTTR",
        ],
      },
    },
  },

  {
    id: 200,
    moduleId: 17,
    moduleTitle: "Monitoring, Logging & Operational Best Practices",
    title: "Health Checks",
    type: "two-column",
    content: {
      left: {
        title: "Health Endpoint",
        items: [
          "Simple status route",
          "Used by load balancers",
          "Confirms app is alive",
          "Checks dependencies",
        ],
      },
      right: {
        title: "Typical Checks",
        items: [
          "App startup",
          "Database connectivity",
          "Cache availability",
          "External services",
        ],
      },
    },
  },

  {
    id: 201,
    moduleId: 17,
    moduleTitle: "Monitoring, Logging & Operational Best Practices",
    title: "Example Health Check View",
    type: "code",
    content: {
      description: "Simple API health endpoint.",
      code: `from django.http import JsonResponse

def health_check(request):
    return JsonResponse({ "status": "ok" })`,
    },
  },

  {
    id: 202,
    moduleId: 17,
    moduleTitle: "Monitoring, Logging & Operational Best Practices",
    title: "Operational Best Practices",
    type: "two-column",
    content: {
      left: {
        title: "Good Habits",
        items: [
          "Log before deploy",
          "Monitor after deploy",
          "Set alerts",
          "Review logs regularly",
        ],
      },
      right: {
        title: "Professional Mindset",
        items: [
          "Assume failures",
          "Design for recovery",
          "Document incidents",
          "Continuously improve",
        ],
      },
    },
  },

  {
    id: 203,
    moduleId: 17,
    moduleTitle: "Monitoring, Logging & Operational Best Practices",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Capstone project",
          "End-to-end application",
          "Real-world practices",
          "Portfolio-ready system",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Monitoring mindset",
          "Logging strategy",
          "Operational readiness",
          "Ready to build capstone",
        ],
      },
    },
  },
  // =========================
  // Django Module 18 (Final): Capstone Project – Task Management API
  // =========================

  {
    id: 204,
    moduleId: 18,
    moduleTitle: "Capstone Project: Task Management API",
    title: "Capstone Project Overview",
    type: "two-column",
    content: {
      left: {
        title: "What You Will Build",
        items: [
          "A complete Task Management API",
          "User authentication with JWT",
          "CRUD operations",
          "Production-ready backend",
        ],
      },
      right: {
        title: "Why This Project Matters",
        items: [
          "Tests everything you’ve learned",
          "Simulates real-world backend work",
          "Portfolio-ready",
          "Confidence builder",
        ],
      },
    },
  },

  {
    id: 205,
    moduleId: 18,
    moduleTitle: "Capstone Project: Task Management API",
    title: "Core Features to Implement",
    type: "two-column",
    content: {
      left: {
        title: "Functional Requirements",
        items: [
          "User registration & login",
          "JWT authentication",
          "Create, read, update, delete tasks",
          "User-specific task ownership",
        ],
      },
      right: {
        title: "Technical Requirements",
        items: [
          "Django + DRF",
          "PostgreSQL or SQLite",
          "Environment variables",
          "Pagination & filtering",
        ],
      },
    },
  },

  {
    id: 206,
    moduleId: 18,
    moduleTitle: "Capstone Project: Task Management API",
    title: "Data Model Design",
    type: "two-column",
    content: {
      left: {
        title: "User",
        items: [
          "Use Django’s User model",
          "JWT-based authentication",
          "Permissions enforced",
          "One-to-many relationship",
        ],
      },
      right: {
        title: "Task",
        items: [
          "title",
          "completed",
          "created_at",
          "owner (ForeignKey to User)",
        ],
      },
    },
  },

  {
    id: 207,
    moduleId: 18,
    moduleTitle: "Capstone Project: Task Management API",
    title: "Required API Endpoints",
    type: "two-column",
    content: {
      left: {
        title: "Auth Endpoints",
        items: [
          "POST /api/token/",
          "POST /api/token/refresh/",
          "User registration endpoint",
          "Protected routes",
        ],
      },
      right: {
        title: "Task Endpoints",
        items: [
          "GET /api/tasks/",
          "POST /api/tasks/",
          "PUT/PATCH /api/tasks/{id}/",
          "DELETE /api/tasks/{id}/",
        ],
      },
    },
  },

  {
    id: 208,
    moduleId: 18,
    moduleTitle: "Capstone Project: Task Management API",
    title: "Security Requirements",
    type: "two-column",
    content: {
      left: {
        title: "Authentication",
        items: [
          "JWT required for all task routes",
          "Short-lived access tokens",
          "Refresh token support",
          "Secure headers",
        ],
      },
      right: {
        title: "Authorization",
        items: [
          "Users access only their tasks",
          "Owner-based permissions",
          "No cross-user access",
          "403 for forbidden actions",
        ],
      },
    },
  },

  {
    id: 209,
    moduleId: 18,
    moduleTitle: "Capstone Project: Task Management API",
    title: "Quality & Best Practices",
    type: "two-column",
    content: {
      left: {
        title: "Code Quality",
        items: [
          "Clean project structure",
          "Reusable serializers",
          "Proper error handling",
          "Meaningful variable names",
        ],
      },
      right: {
        title: "Engineering Practices",
        items: [
          "Unit & API tests",
          "Pagination enabled",
          "Filtering supported",
          "Logging configured",
        ],
      },
    },
  },

  {
    id: 210,
    moduleId: 18,
    moduleTitle: "Capstone Project: Task Management API",
    title: "Deployment Requirements",
    type: "two-column",
    content: {
      left: {
        title: "Deployment Targets",
        items: [
          "Render / Railway / Fly.io",
          "Gunicorn or Uvicorn",
          "Production settings",
          "Environment variables",
        ],
      },
      right: {
        title: "Must-Haves",
        items: [
          "DEBUG = False",
          "ALLOWED_HOSTS configured",
          "Static files handled",
          "Health check endpoint",
        ],
      },
    },
  },

  {
    id: 211,
    moduleId: 18,
    moduleTitle: "Capstone Project: Task Management API",
    title: "Stretch Goals (Optional)",
    type: "two-column",
    content: {
      left: {
        title: "Enhancements",
        items: [
          "Task categories or tags",
          "Due dates",
          "Search functionality",
          "Soft deletes",
        ],
      },
      right: {
        title: "Advanced Topics",
        items: [
          "Rate limiting",
          "Caching",
          "Background tasks",
          "API versioning",
        ],
      },
    },
  },

  {
    id: 212,
    moduleId: 18,
    moduleTitle: "Capstone Project: Task Management API",
    title: "How This Prepares You for Real Work",
    type: "two-column",
    content: {
      left: {
        title: "Skills Demonstrated",
        items: [
          "Backend architecture",
          "Secure API design",
          "Production readiness",
          "Testing mindset",
        ],
      },
      right: {
        title: "Career Value",
        items: [
          "Strong portfolio project",
          "Interview talking point",
          "Real-world confidence",
          "Foundation for scaling",
        ],
      },
    },
  },

  {
    id: 213,
    moduleId: 18,
    moduleTitle: "Capstone Project: Task Management API",
    title: "Final Outcome",
    type: "two-column",
    content: {
      left: {
        title: "By the End",
        items: [
          "Fully deployed API",
          "Secure and tested",
          "Documented endpoints",
          "Production mindset",
        ],
      },
      right: {
        title: "You Are Now Able To",
        items: [
          "Build Django backends",
          "Design REST APIs",
          "Deploy real systems",
          "Grow into advanced topics",
        ],
      },
    },
  },
];
