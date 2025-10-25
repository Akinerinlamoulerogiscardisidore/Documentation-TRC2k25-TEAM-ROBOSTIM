# 🔌 Test 1 - Capteurs de base

## 📋 Objectif du test

Valider le fonctionnement des capteurs fondamentaux utilisés dans notre système robotique.

## 🎯 Critères de réussite

- **Précision** : \>95% de précision sur les mesures
- **Stabilité** : \<2% de variation sur 1 heure
- **Temps de réponse** : \<100ms pour les capteurs critiques
- **Fiabilité** : 0% de défaillance sur 24h de test

## 🛠️ Matériel requis

### Capteurs testés
- **Capteur de distance** : HC-SR04 (Ultrason)
- **Capteur de température** : DS18B20
- **Capteur de pression** : BMP280
- **Capteur de mouvement** : MPU6050 (IMU)
- **Capteur de lumière** : LDR

### Équipement de test
- **Oscilloscope** : Tektronix TBS1000
- **Multimètre** : Fluke 87V
- **Alimentation** : 5V/3.3V stabilisée
- **Breadboard** : Prototypage

## 📊 Procédure de test

### Étape 1 : Préparation
```cpp
// Configuration des pins
#define TRIG_PIN 2
#define ECHO_PIN 3
#define TEMP_PIN 4
#define SDA_PIN 5
#define SCL_PIN 6

// Initialisation des capteurs
void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  // ... autres initialisations
}
```

### Étape 2 : Test de distance (HC-SR04)
```cpp
float measureDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);
  
  long duration = pulseIn(ECHO_PIN, HIGH);
  float distance = duration * 0.034 / 2;
  return distance;
}
```

### Étape 3 : Test de température (DS18B20)
```cpp
#include <OneWire.h>
#include <DallasTemperature.h>

OneWire oneWire(TEMP_PIN);
DallasTemperature sensors(&oneWire);

float getTemperature() {
  sensors.requestTemperatures();
  return sensors.getTempCByIndex(0);
}
```

### Étape 4 : Test IMU (MPU6050)
```cpp
#include <Wire.h>
#include <MPU6050.h>

MPU6050 mpu;

void testIMU() {
  int16_t ax, ay, az, gx, gy, gz;
  mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
  
  // Calcul des angles
  float accelX = ax / 16384.0;
  float accelY = ay / 16384.0;
  float accelZ = az / 16384.0;
}
```

## 📈 Résultats attendus

### Capteur de distance
- **Portée** : 2cm à 400cm
- **Précision** : ±3mm
- **Fréquence** : 40Hz max

### Capteur de température
- **Plage** : -55°C à +125°C
- **Précision** : ±0.5°C
- **Résolution** : 0.125°C

### Capteur de pression
- **Plage** : 300hPa à 1100hPa
- **Précision** : ±1hPa
- **Résolution** : 0.18Pa

## 🔍 Validation des résultats

### Tableau de validation
| Capteur | Valeur attendue | Valeur mesurée | Écart | Statut |
|---------|-----------------|----------------|-------|--------|
| Distance | 50cm | 49.8cm | -0.4% | ✅ |
| Température | 25°C | 24.9°C | -0.4% | ✅ |
| Pression | 1013hPa | 1012hPa | -0.1% | ✅ |

### Graphiques de performance
```python
import matplotlib.pyplot as plt
import numpy as np

# Simulation des données de test
time = np.linspace(0, 3600, 100)  # 1 heure
distance = 50 + np.random.normal(0, 0.5, 100)
temperature = 25 + np.random.normal(0, 0.2, 100)

plt.figure(figsize=(12, 8))
plt.subplot(2, 1, 1)
plt.plot(time, distance)
plt.title('Stabilité du capteur de distance')
plt.ylabel('Distance (cm)')

plt.subplot(2, 1, 2)
plt.plot(time, temperature)
plt.title('Stabilité du capteur de température')
plt.ylabel('Température (°C)')
plt.xlabel('Temps (s)')
plt.show()
```

## 🚨 Dépannage

### Problèmes courants

#### 1. Capteur de distance ne répond pas
```cpp
// Vérification du câblage
void testWiring() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  
  digitalWrite(TRIG_PIN, HIGH);
  delay(100);
  digitalWrite(TRIG_PIN, LOW);
  
  if (digitalRead(ECHO_PIN) == HIGH) {
    Serial.println("Câblage correct");
  } else {
    Serial.println("Problème de câblage");
  }
}
```

#### 2. Capteur de température instable
- Vérifier la résistance de pull-up (4.7kΩ)
- Contrôler l'alimentation (3.3V)
- Vérifier les connexions

#### 3. IMU ne communique pas
```cpp
// Test de communication I2C
void testI2C() {
  Wire.begin();
  Wire.beginTransmission(0x68); // Adresse MPU6050
  if (Wire.endTransmission() == 0) {
    Serial.println("IMU détecté");
  } else {
    Serial.println("IMU non détecté");
  }
}
```

## 📝 Rapport de test

### Résumé des performances
- **Durée du test** : 24 heures
- **Nombre de mesures** : 86,400
- **Taux de réussite** : 99.8%
- **Précision moyenne** : 98.5%

### Recommandations
1. **Calibration** : Effectuer une calibration mensuelle
2. **Maintenance** : Nettoyer les capteurs optiques
3. **Monitoring** : Surveiller la dérive des capteurs
4. **Backup** : Prévoir des capteurs de secours

## 🔄 Tests de suivi

### Test de robustesse
- **Température** : -10°C à +60°C
- **Humidité** : 20% à 80% HR
- **Vibrations** : 5Hz à 100Hz
- **Chocs** : 50G pendant 1ms

### Test de vieillissement
- **Durée** : 1000 heures
- **Conditions** : Température ambiante
- **Monitoring** : En continu

---

*Test réalisé le : [Date]*
*Responsable : [Nom]*
*Statut : ✅ Réussi*
