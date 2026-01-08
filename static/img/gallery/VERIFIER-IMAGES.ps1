# Script PowerShell pour vérifier les images de la galerie
# Ce script vérifie que toutes les images requises sont présentes

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Vérification des Images de la Galerie" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Liste des images requises
$imagesRequises = @(
    # Photos d'équipe
    "team-group.jpg",
    "team-working.jpg",
    "team-meeting.jpg",
    
    # Réalisations
    "robot-prototype.jpg",
    "electronics-lab.jpg",
    "mechanical-workshop.jpg",
    "software-development.jpg",
    
    # Moments de compétition
    "competition-prep.jpg",
    "robot-testing.jpg",
    "team-celebration.jpg",
    
    # Vie académique
    "university-campus.jpg",
    "lab-session.jpg"
)

# Obtenir le répertoire actuel
$dossierGalerie = $PSScriptRoot

Write-Host "Dossier vérifié : $dossierGalerie" -ForegroundColor Yellow
Write-Host ""

# Compteurs
$imagesTrouvees = 0
$imagesManquantes = 0
$imagesInattendues = @()

# Vérifier chaque image requise
Write-Host "Vérification des images requises..." -ForegroundColor Green
Write-Host ""

foreach ($image in $imagesRequises) {
    $cheminImage = Join-Path $dossierGalerie $image
    
    if (Test-Path $cheminImage) {
        $taille = (Get-Item $cheminImage).Length / 1MB
        Write-Host "  [OK] $image ($([math]::Round($taille, 2)) MB)" -ForegroundColor Green
        $imagesTrouvees++
    } else {
        Write-Host "  [MANQUANT] $image" -ForegroundColor Red
        $imagesManquantes++
    }
}

Write-Host ""
Write-Host "Recherche d'images inattendues..." -ForegroundColor Yellow
Write-Host ""

# Vérifier les images présentes mais non listées
$fichiersPresents = Get-ChildItem -Path $dossierGalerie -File | Where-Object { 
    $_.Extension -match '\.(jpg|jpeg|png|gif)$' 
}

foreach ($fichier in $fichiersPresents) {
    if ($imagesRequises -notcontains $fichier.Name) {
        Write-Host "  [INATTENDU] $($fichier.Name)" -ForegroundColor Yellow
        $imagesInattendues += $fichier.Name
    }
}

# Résumé
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  RÉSUMÉ" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Images trouvées    : $imagesTrouvees / $($imagesRequises.Count)" -ForegroundColor $(if ($imagesTrouvees -eq $imagesRequises.Count) { "Green" } else { "Yellow" })
Write-Host "Images manquantes  : $imagesManquantes" -ForegroundColor $(if ($imagesManquantes -eq 0) { "Green" } else { "Red" })
Write-Host "Images inattendues : $($imagesInattendues.Count)" -ForegroundColor $(if ($imagesInattendues.Count -eq 0) { "Green" } else { "Yellow" })
Write-Host ""

if ($imagesTrouvees -eq $imagesRequises.Count -and $imagesManquantes -eq 0) {
    Write-Host "✅ Toutes les images sont présentes !" -ForegroundColor Green
} else {
    Write-Host "⚠️  Certaines images sont manquantes." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Consultez le fichier GUIDE-AJOUT-PHOTOS.md pour plus d'informations." -ForegroundColor Cyan
}

Write-Host ""
Write-Host "Appuyez sur une touche pour quitter..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
