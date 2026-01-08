# 🎨 Exemples Visuels pour les Templates

Ce document contient des exemples visuels et des illustrations pour vous aider à créer vos documentations techniques.

---

## 📐 Schémas ASCII pour Électronique

### Schéma de câblage basique

```
Arduino Uno          Composant
-----------          ---------
5V       ────────>   VCC
GND      ────────>   GND
Pin 2    ────────>   Signal
Pin 3    ────────>   Data
```

### Schéma avec résistances

```
Arduino          Résistance 10kΩ          Capteur
--------         ┌─────┐                 ┌─────┐
Pin 2    ───────┤ 10k ├──────>          │     │
                 └─────┘                 │     │
                                          │     │
5V       ────────────────────────────────>│ VCC │
GND      ────────────────────────────────>│ GND │
                                          └─────┘
```

### Schéma I2C

```
Arduino          Composant 1          Composant 2
--------         ┌────────┐           ┌────────┐
SDA (A4) ───────┤ SDA    │──────────>│ SDA    │
SCL (A5) ───────┤ SCL    │──────────>│ SCL    │
                │        │           │        │
5V       ───────┤ VCC    │──────────>│ VCC    │
GND      ───────┤ GND    │──────────>│ GND    │
                └────────┘           └────────┘
```

---

## 🗺️ Diagrammes pour ROS

### Architecture de nœuds

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│  Sensor     │         │  Processing │         │  Control    │
│   Node      │────────>│    Node     │────────>│    Node     │
└─────────────┘         └─────────────┘         └─────────────┘
     │                        │                        │
     │ /sensor_data           │ /processed_data         │ /cmd_vel
     │                        │                        │
     └────────────────────────┴────────────────────────┘
```

### Flux de données ROS 2

```
┌──────────┐     /image_raw      ┌──────────┐     /image_processed
│  Camera  │────────────────────>│  Vision  │────────────────────>
│  Node    │                     │   Node   │
└──────────┘                     └──────────┘
                                        │
                                        │ /detections
                                        ▼
                                 ┌──────────┐
                                 │  Action  │
                                 │   Node   │
                                 └──────────┘
```

---

## 🧠 Diagrammes pour IA

### Pipeline de traitement IA

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Input   │───>│  Preproc │───>│  Model   │───>│  Output  │
│  Image   │    │          │    │  (YOLO)  │    │ Detection│
└──────────┘    └──────────┘    └──────────┘    └──────────┘
     │               │                │                │
     │               │                │                │
  Raw Data      Normalized        Inference       Bounding Boxes
```

### Architecture de modèle

```
Input Layer (640x640x3)
        │
        ▼
┌───────────────┐
│  Backbone     │ (Feature Extraction)
│  (CSPDarknet) │
└───────────────┘
        │
        ▼
┌───────────────┐
│   Neck        │ (Feature Fusion)
│   (PANet)     │
└───────────────┘
        │
        ▼
┌───────────────┐
│   Head        │ (Detection)
│   (YOLO)      │
└───────────────┘
        │
        ▼
Output: Bounding Boxes + Classes
```

---

## ⚙️ Schémas pour Mécanique

### Vue éclatée d'assemblage

```
        ┌─────────┐
        │ Couvercle│
        └─────────┘
             │
        ┌────┴────┐
        │ Entretoises│
        └────┬────┘
             │
        ┌────┴────┐
        │  Base   │
        └─────────┘
```

### Structure de montage

```
┌─────────────────────────┐
│   Composant Électronique │
│   (Arduino/ESP32)       │
└─────────────────────────┘
           │
           │ Fixation M3
           ▼
┌─────────────────────────┐
│   Plaque de Montage     │
│   (PLA/PETG)            │
└─────────────────────────┘
           │
           │ Entretoises 20mm
           ▼
┌─────────────────────────┐
│   Chassis Principal     │
│   (Structure Base)      │
└─────────────────────────┘
```

---

## 📊 Exemples de Tableaux

### Tableau de résultats de test

| Test | Valeur attendue | Valeur mesurée | Écart | Statut |
|------|----------------|----------------|-------|--------|
| Distance | 50cm | 49.8cm | -0.4% | ✅ |
| Température | 25°C | 24.9°C | -0.4% | ✅ |
| Pression | 1013hPa | 1012hPa | -0.1% | ✅ |

### Tableau de matériel

| Composant | Référence | Quantité | Rôle |
|-----------|-----------|----------|------|
| Capteur | HC-SR04 | 4 | Détection distance |
| Microcontrôleur | ESP32 | 1 | Traitement |
| Résistance | 10kΩ | 8 | Pull-up |

---

## 🎨 Codes de couleur pour badges

### Électronique
```markdown
<span className="badge-sticker badge-electronique">⚡ Électronique</span>
```
Couleur : Cyan (#0ea5e9)

### ROS
```markdown
<span className="badge-sticker badge-it">🤖 ROS</span>
```
Couleur : Violet (#8b5cf6)

### IA
```markdown
<span className="badge-sticker badge-it">🧠 IA</span>
```
Couleur : Violet (#8b5cf6)

### Mécanique
```markdown
<span className="badge-sticker badge-mecanique">⚙️ Mécanique</span>
```
Couleur : Rouge (#ef4444)

---

## 📸 Emplacements recommandés pour images

### Structure de dossiers

```
static/
└── img/
    ├── electronics/
    │   ├── schemas/
    │   ├── tests/
    │   └── results/
    ├── ros/
    │   ├── architecture/
    │   ├── rviz/
    │   └── graphs/
    ├── ia/
    │   ├── models/
    │   ├── results/
    │   └── graphs/
    └── mechanics/
        ├── cad/
        ├── assembly/
        └── tests/
```

### Exemples de noms de fichiers

**Électronique** :
- `cablage-hc-sr04.jpg`
- `schema-electronique.png`
- `test-results-graph.png`

**ROS** :
- `architecture-ros.png`
- `rviz-visualization.png`
- `navigation-path.png`

**IA** :
- `yolo-detection-results.png`
- `training-curves.png`
- `confusion-matrix.png`

**Mécanique** :
- `chassis-3d-view.png`
- `assembly-diagram.png`
- `test-results.png`

---

## 💻 Exemples de code formaté

### Code Arduino/C++

````markdown
```cpp
// Configuration des pins
#define TRIG_PIN 2
#define ECHO_PIN 3

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
}
```
````

### Code Python

````markdown
```python
import cv2
from ultralytics import YOLO

# Charger le modèle
model = YOLO('best.pt')

# Inférence
results = model('image.jpg')
results[0].show()
```
````

### Code Bash/Shell

````markdown
```bash
# Lancer ROS 2
source /opt/ros/humble/setup.bash
ros2 launch nav2_bringup navigation_launch.py
```
````

---

## 📈 Exemples de graphiques (code Python)

### Graphique simple

```python
import matplotlib.pyplot as plt
import numpy as np

# Données
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Graphique
plt.figure(figsize=(10, 6))
plt.plot(x, y, linewidth=2)
plt.xlabel('Temps (s)')
plt.ylabel('Amplitude')
plt.title('Signal sinusoïdal')
plt.grid(True)
plt.show()
```

### Graphique avec plusieurs courbes

```python
plt.figure(figsize=(12, 6))
plt.plot(time, distance, label='Distance', linewidth=2)
plt.plot(time, temperature, label='Température', linewidth=2)
plt.xlabel('Temps (s)')
plt.ylabel('Valeurs')
plt.title('Évolution des mesures')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()
```

---

## ✅ Checklist visuelle

Utilisez cette checklist dans vos documentations :

```markdown
### Checklist de vérification

- [ ] Matériel préparé
- [ ] Code testé
- [ ] Schéma vérifié
- [ ] Résultats enregistrés
- [ ] Documentation complète
```

---

## 🎯 Conseils pour les illustrations

1. **Soyez clair** : Une illustration simple vaut mieux qu'une complexe
2. **Utilisez des couleurs** : Pour différencier les éléments
3. **Ajoutez des légendes** : Expliquez ce que montre l'image
4. **Gardez la cohérence** : Utilisez le même style pour toutes les illustrations
5. **Optimisez les images** : Compressez les images pour un chargement rapide

---

*Guide d'exemples visuels créé le : [Date]*
*Dernière mise à jour : [Date]*
