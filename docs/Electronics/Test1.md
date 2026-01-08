# 🔌 Test 1 - Gyroscope et Accéléromètre

## 📋 Objectif du test

Ce test vise à évaluer votre capacité à identifier puis exploiter les valeurs d'un capteur gyroscope et accéléromètre. L'objectif est de détecter l'orientation dans l'espace ainsi que la vitesse de déplacement de votre main.

## 🎯 Présentation du test

L'orientation dans l'espace ou plus simplement la capacité à reconnaître sa gauche, sa droite, le haut et le bas est une compétence que l'on acquiert au cours de notre enfance. Nous arrivons à nous repérer dans l'espace grâce à nos sens. Mais comment font les robots pour se repérer dans l'espace ?

L'évolution de la technologie et particulièrement celle de l'électronique prend en compte notre capacité à exploiter les informations de notre environnement. Ainsi apparaît le terme de capteur. Un capteur peut être défini comme étant un dispositif électronique capable de convertir des données environnementales ou physiques en signaux électriques.

Pour cette première épreuve de sélection en électronique, vous aurez à identifier un capteur exécutant cette fonction et l'utiliser pour donner l'orientation dans l'espace ainsi que la vitesse de votre main.

## 📊 Description technique

Afin de valider cette première étape de sélection, nous attendons de vous que vous :

- **Identifiez** un capteur combinant les fonctions gyroscope et accéléromètre puis expliquez son fonctionnement dans votre documentation. Le capteur doit communiquer par I2C.
- **Placez** le capteur dans la paume de main d'un membre de l'équipe puis bougez-la dans toutes les directions : vers le haut, vers le bas, vers la droite, vers la gauche, vers l'avant et vers l'arrière.
- **Réalisez** un code Arduino bien détaillé qui exploite les données fournies par le capteur pour indiquer sur un écran LCD le sens de déplacement de votre main ainsi que son accélération.
- **Faites** un schéma électronique sous KICAD. Vous n'avez pas à désigner le PCB.
- **Fabriquez** votre propre alimentation électrique pour alimenter le circuit.
- **Documentez** votre travail sur le dépôt GitHub qui vous sera attribué.

**NB :** Vous n'êtes pas obligés d'imprimer en 3D le projet à réaliser. Vous pouvez utiliser les composants disponibles autour de vous. Cependant, veillez à soigner la présentation du projet et à faire preuve d'innovation.

Pour ce projet l'utilisation de la carte Arduino ou de breadboard dans la présentation des résultats n'est pas interdite. Néanmoins la bonne gestion des câbles et l'esthétique du rendu final sera notée. Ensuite, la vidéo de présentation des résultats doit être prise de sorte que nous puissions voir le capteur dans la main, l'affichage sur l'écran et tous les membres de la team.

## 🛠️ Matériel requis

### Capteur recommandé
- **MPU6050** : Capteur gyroscope et accéléromètre 6 axes avec communication I2C
- **Alternative** : MPU9250, LSM6DS3, ou équivalent

### Composants électroniques
- **Microcontrôleur** : Arduino Nano ou équivalent (ATmega328P)
- **Écran LCD** : LCD 16x2 avec module I2C (PCF8574) ou LCD direct
- **Résistances** : 4.7kΩ (pull-up I2C), selon besoins
- **Alimentation** : Composants pour créer une alimentation 5V/3.3V stabilisée
- **Protection** : Fusibles, diodes de protection, régulateurs de tension

### Outils
- **KICAD** : Pour le schéma électronique
- **Breadboard** : Pour le prototypage
- **Multimètre** : Pour les mesures
- **Oscilloscope** : Optionnel, pour vérifier les signaux I2C

## 📊 Procédure de test

### Étape 1 : Identification et compréhension du capteur

#### Choix du capteur
Le **MPU6050** est recommandé car il combine :
- **Accéléromètre 3 axes** : Mesure l'accélération linéaire (X, Y, Z)
- **Gyroscope 3 axes** : Mesure la vitesse angulaire (rotation)
- **Communication I2C** : Interface simple à deux fils (SDA, SCL)

#### Fonctionnement
```cpp
// Le MPU6050 fonctionne sur le bus I2C
// Adresse I2C par défaut : 0x68
// Alimentation : 3.3V ou 5V (selon version)
// Fréquence I2C : Jusqu'à 400kHz (Fast Mode)
```

### Étape 2 : Schéma électronique KICAD

#### Connexions principales

**MPU6050 → Arduino :**
- VCC → 3.3V ou 5V
- GND → GND
- SCL → A5 (Arduino Uno) ou SCL (Arduino Nano)
- SDA → A4 (Arduino Uno) ou SDA (Arduino Nano)

**LCD I2C → Arduino :**
- VCC → 5V
- GND → GND
- SCL → A5 (même bus I2C)
- SDA → A4 (même bus I2C)

**Alimentation :**
- Régulateur 5V (LM7805) pour Arduino et LCD
- Régulateur 3.3V (AMS1117) pour MPU6050
- Protection : Fusible, diode de protection inverse

### Étape 3 : Code Arduino

```cpp
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <MPU6050.h>

// Initialisation LCD I2C (adresse généralement 0x27 ou 0x3F)
LiquidCrystal_I2C lcd(0x27, 16, 2);

// Initialisation MPU6050
MPU6050 mpu;

// Variables pour les données
int16_t ax, ay, az;  // Accélération
int16_t gx, gy, gz;  // Gyroscope
float accelX, accelY, accelZ;
float gyroX, gyroY, gyroZ;

// Seuils pour détection de mouvement
const float ACCEL_THRESHOLD = 5000;  // Ajuster selon sensibilité
const float GYRO_THRESHOLD = 100;   // Ajuster selon sensibilité

void setup() {
  Serial.begin(9600);
  
  // Initialisation LCD
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("MPU6050 Test");
  lcd.setCursor(0, 1);
  lcd.print("Initialisation...");
  delay(2000);
  
  // Initialisation MPU6050
  Wire.begin();
  if (!mpu.begin()) {
    lcd.clear();
    lcd.print("MPU6050 Error!");
    while (1) {
      delay(1000);
    }
  }
  
  // Configuration MPU6050
  mpu.setAccelerometerRange(MPU6050_RANGE_2_G);
  mpu.setGyroRange(MPU6050_RANGE_250_DEG);
  mpu.setFilterBandwidth(MPU6050_BAND_21_HZ);
  
  lcd.clear();
  lcd.print("Pret!");
  delay(1000);
}

void loop() {
  // Lecture des données
  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
  
  // Conversion en unités physiques
  accelX = ax / 16384.0;  // g (gravité)
  accelY = ay / 16384.0;
  accelZ = az / 16384.0;
  
  gyroX = gx / 131.0;  // deg/s
  gyroY = gy / 131.0;
  gyroZ = gz / 131.0;
  
  // Calcul de l'accélération totale
  float accelTotal = sqrt(accelX*accelX + accelY*accelY + accelZ*accelZ);
  
  // Détection de la direction
  String direction = detectDirection();
  String acceleration = String(accelTotal, 2) + "g";
  
  // Affichage sur LCD
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Dir: " + direction);
  lcd.setCursor(0, 1);
  lcd.print("Acc: " + acceleration);
  
  // Affichage série (optionnel)
  Serial.print("Direction: ");
  Serial.print(direction);
  Serial.print(" | Acceleration: ");
  Serial.print(accelTotal);
  Serial.println(" g");
  
  delay(200);  // Mise à jour toutes les 200ms
}

String detectDirection() {
  // Détection basée sur l'accélération
  float absX = abs(accelX);
  float absY = abs(accelY);
  float absZ = abs(accelZ);
  
  // Détermination de la direction dominante
  if (absX > absY && absX > absZ) {
    if (accelX > ACCEL_THRESHOLD) return "DROITE";
    if (accelX < -ACCEL_THRESHOLD) return "GAUCHE";
  }
  else if (absY > absX && absY > absZ) {
    if (accelY > ACCEL_THRESHOLD) return "AVANT";
    if (accelY < -ACCEL_THRESHOLD) return "ARRIERE";
  }
  else if (absZ > absX && absZ > absY) {
    if (accelZ > ACCEL_THRESHOLD) return "HAUT";
    if (accelZ < -ACCEL_THRESHOLD) return "BAS";
  }
  
  return "STABLE";
}
```

### Étape 4 : Réalisation de l'alimentation

#### Schéma d'alimentation recommandé

```
Entrée (9-12V) → [Fusible] → [Diode] → [LM7805] → 5V (Arduino, LCD)
                                    ↓
                              [AMS1117-3.3] → 3.3V (MPU6050)
```

**Composants nécessaires :**
- Régulateur 5V : LM7805 avec radiateur
- Régulateur 3.3V : AMS1117-3.3
- Condensateurs : 100µF (entrée), 10µF (sortie) pour chaque régulateur
- Diode de protection : 1N4007
- Fusible : 1A

### Étape 5 : Tests et validation

#### Test 1 : Vérification I2C
```cpp
// Script de test I2C
void testI2C() {
  Wire.begin();
  Wire.beginTransmission(0x68);  // Adresse MPU6050
  if (Wire.endTransmission() == 0) {
    Serial.println("MPU6050 detecte!");
  } else {
    Serial.println("MPU6050 non detecte!");
  }
}
```

#### Test 2 : Calibration
- Placer le capteur sur une surface plane
- Mesurer les valeurs au repos
- Ajuster les offsets si nécessaire

#### Test 3 : Détection des directions
- Tester chaque direction (haut, bas, gauche, droite, avant, arrière)
- Vérifier que l'affichage LCD correspond au mouvement
- Vérifier la précision de l'accélération

## 📈 Résultats attendus

### Fonctionnalités validées
- ✅ Détection correcte des 6 directions
- ✅ Affichage clair sur LCD
- ✅ Mesure d'accélération précise
- ✅ Communication I2C stable
- ✅ Alimentation sécurisée

### Critères de performance
- **Temps de réponse** : inférieur à 200ms pour détecter un changement de direction
- **Précision** : Détection correcte dans 95% des cas
- **Stabilité** : Pas de faux positifs au repos

## 🔍 Grille de notation

Le test sera noté sur 100 points répartis comme suit :

### 1. La circuiterie (25 points)
- **Qualité du schéma électronique** : Choix des composants et pertinence de leurs rôles
- **Gestion et sécurité de l'alimentation** : Protections contre les courts-circuits, respect des niveaux de tension et de courant
- **Gestion des câbles** : Organisation et esthétique

### 2. Le code (25 points)
- **Facilité de compréhension** : Commentaires clairs et détaillés
- **Optimisation** : Méthodologie et structure du code
- **Lisibilité** : Respect des indentations et conventions

### 3. Le test du fonctionnement (30 points)
- **Détection des directions** : Précision et fiabilité
- **Affichage LCD** : Clarté et lisibilité
- **Stabilité** : Absence de faux positifs

### 4. La structure de la documentation (10 points)
- **Clarté** : Documentation facile à comprendre
- **Complétude** : Tous les éléments présents
- **Organisation** : Structure logique

### 5. La présentation (10 points)
- **Qualité des slides** : Présentation professionnelle
- **Maîtrise du sujet** : Compréhension approfondie
- **Réponses aux questions** : Capacité à expliquer

## 🚨 Dépannage

### Problème : MPU6050 non détecté
**Solutions :**
- Vérifier les connexions I2C (SDA, SCL)
- Vérifier l'alimentation (3.3V ou 5V selon version)
- Vérifier les résistances de pull-up (4.7kΩ)
- Scanner le bus I2C pour trouver l'adresse

### Problème : LCD ne s'affiche pas
**Solutions :**
- Vérifier l'adresse I2C du LCD (0x27 ou 0x3F)
- Vérifier les connexions I2C
- Ajuster le potentiomètre de contraste (si LCD direct)
- Tester avec un sketch simple

### Problème : Détection imprécise
**Solutions :**
- Calibrer les offsets du capteur
- Ajuster les seuils (ACCEL_THRESHOLD, GYRO_THRESHOLD)
- Filtrer les données (moyenne glissante)
- Vérifier la stabilité mécanique du capteur

## 📝 Documentation GitHub

### Structure recommandée
```
projet-test1-electronique/
├── README.md
├── schemas/
│   └── schema-electronique.kicad_sch
├── code/
│   └── mpu6050_lcd.ino
├── photos/
│   ├── montage.jpg
│   ├── test-en-action.jpg
│   └── resultat-final.jpg
└── videos/
    └── demonstration.mp4
```

### Contenu du README
- Description du projet
- Liste du matériel
- Instructions de montage
- Explication du code
- Résultats obtenus
- Difficultés rencontrées et solutions

## 🔄 Améliorations possibles

- **Filtrage avancé** : Implémenter un filtre complémentaire ou un filtre de Kalman
- **Interface graphique** : Ajouter une visualisation sur ordinateur
- **Enregistrement de données** : Sauvegarder les mesures sur carte SD
- **Calibration automatique** : Système de calibration au démarrage

---

*Test réalisé le : [Date]*
*Responsable : [Nom]*
*Statut : ✅ En cours / ✅ Réussi*
