<!DOCTYPE html>

<html lang="en">
<head>
    <title>Currency Calculation</title>
    <meta name="description" content="CENG 311 Inclass Activity 5" />

</head>

<body>

	<form action = "activity5.php" method="GET">
		<table>
			<tr>
				<td>
					From:
				</td>
				<td>
					<input type="text" name="value"/>
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="currencies">
						<option value="FUSD"/> USD </option>
						<option value="FCAD"/> CAD </option>
						<option value="FEUR"/> EUR </option>
					</select>
				</td>	
			</tr>
			<tr>
				<td>
					To:
				</td>
				<td>
					<input type="text" name="value"/>
				</td>
				<td>
					Currency:
				</td>
				<td>
					<select name="currencies">
						<option value="TUSD"/> USD </option>
						<option value="TCAD"/> CAD </option>
						<option value="TEUR"/> EUR </option>
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
</body>