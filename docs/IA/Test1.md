# 🧠 Test 1 - Classification d'images

## 📋 Objectif du test

Développer et tester un modèle de classification d'images pour la reconnaissance d'objets dans notre environnement robotique.

## 🎯 Critères de réussite

- **Précision** : \>95% sur le dataset de test
- **Temps d'inférence** : \<100ms par image
- **Robustesse** : \>90% sur données bruitées
- **Généralisation** : \>85% sur données non vues

## 🛠️ Environnement technique

### Frameworks utilisés
- **TensorFlow** : 2.13.0
- **Keras** : 2.13.1
- **OpenCV** : 4.8.0
- **NumPy** : 1.24.3
- **Matplotlib** : 3.7.2

### Configuration matérielle
```yaml
Hardware:
  GPU: NVIDIA RTX 3080
  RAM: 32GB
  CPU: Intel i7-10700K
  Storage: 1TB SSD
```

## 📊 Procédure de test

### Étape 1 : Préparation des données
```python
import tensorflow as tf
from tensorflow import keras
import numpy as np
import cv2
from sklearn.model_selection import train_test_split

# Configuration des paramètres
IMG_SIZE = 224
BATCH_SIZE = 32
EPOCHS = 50
LEARNING_RATE = 0.001

# Chargement du dataset
def load_dataset(data_path):
    """Charge et préprocesse le dataset"""
    images = []
    labels = []
    
    for class_name in os.listdir(data_path):
        class_path = os.path.join(data_path, class_name)
        for img_name in os.listdir(class_path):
            img_path = os.path.join(class_path, img_name)
            img = cv2.imread(img_path)
            img = cv2.resize(img, (IMG_SIZE, IMG_SIZE))
            img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
            images.append(img)
            labels.append(class_name)
    
    return np.array(images), np.array(labels)

# Preprocessing des données
def preprocess_data(images, labels):
    """Preprocessing et augmentation des données"""
    # Normalisation
    images = images.astype('float32') / 255.0
    
    # Encodage des labels
    label_encoder = LabelEncoder()
    labels_encoded = label_encoder.fit_transform(labels)
    labels_categorical = keras.utils.to_categorical(labels_encoded)
    
    return images, labels_categorical, label_encoder
```

### Étape 2 : Architecture du modèle
```python
def create_model(input_shape, num_classes):
    """Crée le modèle de classification"""
    base_model = keras.applications.MobileNetV2(
        input_shape=input_shape,
        include_top=False,
        weights='imagenet'
    )
    
    # Gel des couches de base
    base_model.trainable = False
    
    # Ajout des couches personnalisées
    model = keras.Sequential([
        base_model,
        keras.layers.GlobalAveragePooling2D(),
        keras.layers.Dropout(0.2),
        keras.layers.Dense(128, activation='relu'),
        keras.layers.Dropout(0.2),
        keras.layers.Dense(num_classes, activation='softmax')
    ])
    
    return model

# Compilation du modèle
model = create_model((IMG_SIZE, IMG_SIZE, 3), num_classes)
model.compile(
    optimizer=keras.optimizers.Adam(learning_rate=LEARNING_RATE),
    loss='categorical_crossentropy',
    metrics=['accuracy', 'top_3_accuracy']
)
```

### Étape 3 : Entraînement du modèle
```python
# Callbacks pour l'entraînement
callbacks = [
    keras.callbacks.EarlyStopping(
        monitor='val_accuracy',
        patience=10,
        restore_best_weights=True
    ),
    keras.callbacks.ReduceLROnPlateau(
        monitor='val_loss',
        factor=0.5,
        patience=5,
        min_lr=1e-7
    ),
    keras.callbacks.ModelCheckpoint(
        'best_model.h5',
        monitor='val_accuracy',
        save_best_only=True
    )
]

# Entraînement
history = model.fit(
    train_images, train_labels,
    validation_data=(val_images, val_labels),
    epochs=EPOCHS,
    batch_size=BATCH_SIZE,
    callbacks=callbacks,
    verbose=1
)
```

### Étape 4 : Évaluation du modèle
```python
def evaluate_model(model, test_images, test_labels):
    """Évalue les performances du modèle"""
    # Prédictions
    predictions = model.predict(test_images)
    predicted_classes = np.argmax(predictions, axis=1)
    true_classes = np.argmax(test_labels, axis=1)
    
    # Métriques
    accuracy = accuracy_score(true_classes, predicted_classes)
    precision = precision_score(true_classes, predicted_classes, average='weighted')
    recall = recall_score(true_classes, predicted_classes, average='weighted')
    f1 = f1_score(true_classes, predicted_classes, average='weighted')
    
    # Matrice de confusion
    cm = confusion_matrix(true_classes, predicted_classes)
    
    return {
        'accuracy': accuracy,
        'precision': precision,
        'recall': recall,
        'f1_score': f1,
        'confusion_matrix': cm
    }

# Évaluation
results = evaluate_model(model, test_images, test_labels)
print(f"Accuracy: {results['accuracy']:.4f}")
print(f"Precision: {results['precision']:.4f}")
print(f"Recall: {results['recall']:.4f}")
print(f"F1-Score: {results['f1_score']:.4f}")
```

## 📈 Résultats attendus

### Métriques de performance
- **Accuracy** : >95%
- **Precision** : >94%
- **Recall** : >93%
- **F1-Score** : >94%

### Temps d'inférence
```python
import time

def benchmark_inference(model, test_images, num_runs=100):
    """Benchmark du temps d'inférence"""
    times = []
    
    for _ in range(num_runs):
        start_time = time.time()
        _ = model.predict(test_images[:1], verbose=0)
        end_time = time.time()
        times.append(end_time - start_time)
    
    avg_time = np.mean(times)
    std_time = np.std(times)
    
    return avg_time, std_time

# Benchmark
avg_time, std_time = benchmark_inference(model, test_images)
print(f"Temps d'inférence moyen: {avg_time*1000:.2f}ms")
print(f"Écart-type: {std_time*1000:.2f}ms")
```

## 🔍 Visualisation des résultats

### Graphiques de performance
```python
import matplotlib.pyplot as plt
import seaborn as sns

def plot_training_history(history):
    """Affiche l'historique d'entraînement"""
    fig, axes = plt.subplots(2, 2, figsize=(15, 10))
    
    # Accuracy
    axes[0, 0].plot(history.history['accuracy'], label='Training')
    axes[0, 0].plot(history.history['val_accuracy'], label='Validation')
    axes[0, 0].set_title('Model Accuracy')
    axes[0, 0].set_xlabel('Epoch')
    axes[0, 0].set_ylabel('Accuracy')
    axes[0, 0].legend()
    
    # Loss
    axes[0, 1].plot(history.history['loss'], label='Training')
    axes[0, 1].plot(history.history['val_loss'], label='Validation')
    axes[0, 1].set_title('Model Loss')
    axes[0, 1].set_xlabel('Epoch')
    axes[0, 1].set_ylabel('Loss')
    axes[0, 1].legend()
    
    # Matrice de confusion
    sns.heatmap(results['confusion_matrix'], annot=True, fmt='d', ax=axes[1, 0])
    axes[1, 0].set_title('Confusion Matrix')
    
    # Métriques
    metrics = ['Accuracy', 'Precision', 'Recall', 'F1-Score']
    values = [results['accuracy'], results['precision'], 
              results['recall'], results['f1_score']]
    axes[1, 1].bar(metrics, values)
    axes[1, 1].set_title('Performance Metrics')
    axes[1, 1].set_ylabel('Score')
    
    plt.tight_layout()
    plt.show()

# Affichage des résultats
plot_training_history(history)
```

### Analyse des erreurs
```python
def analyze_errors(model, test_images, test_labels, class_names):
    """Analyse les erreurs de classification"""
    predictions = model.predict(test_images)
    predicted_classes = np.argmax(predictions, axis=1)
    true_classes = np.argmax(test_labels, axis=1)
    
    # Indices des erreurs
    error_indices = np.where(predicted_classes != true_classes)[0]
    
    print(f"Nombre d'erreurs: {len(error_indices)}")
    print(f"Taux d'erreur: {len(error_indices)/len(test_images)*100:.2f}%")
    
    # Analyse des erreurs par classe
    error_analysis = {}
    for idx in error_indices:
        true_class = class_names[true_classes[idx]]
        pred_class = class_names[predicted_classes[idx]]
        
        if true_class not in error_analysis:
            error_analysis[true_class] = {}
        if pred_class not in error_analysis[true_class]:
            error_analysis[true_class][pred_class] = 0
        error_analysis[true_class][pred_class] += 1
    
    return error_analysis
```

## 🚨 Dépannage

### Problèmes courants

#### 1. Overfitting
```python
# Techniques de régularisation
model = keras.Sequential([
    base_model,
    keras.layers.GlobalAveragePooling2D(),
    keras.layers.Dropout(0.5),  # Augmenter le dropout
    keras.layers.Dense(128, activation='relu'),
    keras.layers.BatchNormalization(),  # Ajouter BatchNorm
    keras.layers.Dropout(0.5),
    keras.layers.Dense(num_classes, activation='softmax')
])

# Augmentation de données
datagen = keras.preprocessing.image.ImageDataGenerator(
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    horizontal_flip=True,
    zoom_range=0.2
)
```

#### 2. Underfitting
```python
# Augmentation de la complexité
model = keras.Sequential([
    base_model,
    keras.layers.GlobalAveragePooling2D(),
    keras.layers.Dense(512, activation='relu'),  # Plus de neurones
    keras.layers.Dense(256, activation='relu'),
    keras.layers.Dense(num_classes, activation='softmax')
])

# Réduction du learning rate
optimizer = keras.optimizers.Adam(learning_rate=0.0001)
```

#### 3. Problème de mémoire
```python
# Réduction de la taille du batch
BATCH_SIZE = 16  # Au lieu de 32

# Utilisation de la mémoire GPU
gpus = tf.config.experimental.list_physical_devices('GPU')
if gpus:
    tf.config.experimental.set_memory_growth(gpus[0], True)
```

## 📝 Rapport de test

### Résumé des performances
- **Durée d'entraînement** : 2h 30min
- **Nombre d'époques** : 45
- **Taille du modèle** : 8.5MB
- **Temps d'inférence** : 85ms

### Recommandations
1. **Optimisation** : Quantification pour réduire la taille
2. **Augmentation** : Plus de données d'entraînement
3. **Architecture** : Test d'autres modèles de base
4. **Déploiement** : Conversion pour l'inférence mobile

## 🔄 Tests de suivi

### Test de robustesse
- **Bruit** : Ajout de bruit gaussien
- **Rotation** : Tests de rotation d'images
- **Éclairage** : Variations d'éclairage
- **Occlusion** : Masquage partiel des objets

### Test de généralisation
- **Cross-validation** : Validation croisée
- **Données non vues** : Test sur nouveau dataset
- **Transfer learning** : Adaptation à d'autres domaines

---

*Test réalisé le : [Date]*
*Responsable : [Nom]*
*Statut : ✅ Réussi*
