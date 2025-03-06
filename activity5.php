<?php

$exchangeRates = [
    
    'FUSD_TUSD' => 1,
    'FUSD_TCAD' => 1.43, 
    'FUSD_TEUR' => 0.92,
    
  
    'FCAD_TUSD' => 0.70, 
    'FCAD_TCAD' => 1,
    'FCAD_TEUR' => 0.65, 
    
    
    'FEUR_TUSD' => 1.08, 
    'FEUR_TCAD' => 1.54,
    'FEUR_TEUR' => 1,
];


$fromValue = isset($_GET['value']) ? $_GET['value'] : '';
$fromCurrency = isset($_GET['currencies']) ? $_GET['currencies'] : '';
$toCurrency = isset($_GET['to_currencies']) ? $_GET['to_currencies'] : '';
$result = '';


if (isset($_GET['value']) && is_numeric($_GET['value']) && !empty($fromCurrency) && !empty($toCurrency)) {
   
    $rateKey = $fromCurrency . '_' . $toCurrency;
    
   
    if (isset($exchangeRates[$rateKey])) {
        $rate = $exchangeRates[$rateKey];
        $result = $fromValue * $rate;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Currency Calculation</title>
    <meta name="description" content="CENG 311 Inclass Activity 5" />
</head>

<body>
    <form action="activity5.php" method="GET">
        <table>
            <tr>
                <td>
                    From:
                </td>
                <td>
                    <input type="text" name="value" value="<?php echo htmlspecialchars($fromValue); ?>"/>
                </td>
                <td>
                    Currency:
                </td>
                <td>
                    <select name="currencies">
                        <option value="FUSD" <?php if($fromCurrency == 'FUSD') echo 'selected'; ?>/> USD </option>
                        <option value="FCAD" <?php if($fromCurrency == 'FCAD') echo 'selected'; ?>/> CAD </option>
                        <option value="FEUR" <?php if($fromCurrency == 'FEUR') echo 'selected'; ?>/> EUR </option>
                    </select>
                </td>    
            </tr>
            <tr>
                <td>
                    To:
                </td>
                <td>
                    <input type="text" value="<?php echo htmlspecialchars($result); ?>" readonly/>
                </td>
                <td>
                    Currency:
                </td>
                <td>
                    <select name="to_currencies">
                        <option value="TUSD" <?php if($toCurrency == 'TUSD') echo 'selected'; ?>/> USD </option>
                        <option value="TCAD" <?php if($toCurrency == 'TCAD') echo 'selected'; ?>/> CAD </option>
                        <option value="TEUR" <?php if($toCurrency == 'TEUR') echo 'selected'; ?>/> EUR </option>
                    </select>
                </td>    
            </tr>
            <tr>
                <td>
                    
                </td>
                <td>
                    
                </td>
                <td>
                    
                </td>
                <td>
                    <input type="submit" value="convert"/>
                </td>    
            </tr>
        </table>
    </form>

    <?php if($result !== ''): ?>
    <div style="margin-top: 20px; padding: 10px; background-color: #f0f0f0;">
        <p>Converted value : <?php echo number_format($result, 2); ?> <?php 
            if($toCurrency == 'TUSD') echo 'USD';
            else if($toCurrency == 'TCAD') echo 'CAD';
            else if($toCurrency == 'TEUR') echo 'EUR';
        ?></p>
    </div>
    <?php endif; ?>
</body>
</html>