<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    <?php
    $retour = mail('pauline.cerello@gmail.com', $_POST['objet'], $_POST['message'], 'From: '.$_POST['email']);
    if ($retour) {
        echo '<p>Votre message a bien été envoyé.</p>';
        echo "<a href=\"Contacts.html\">Retour au site </a>";
    }
        
    ?>
</body>
</html>