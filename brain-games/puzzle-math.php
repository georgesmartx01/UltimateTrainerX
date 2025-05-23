<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/navbar.css">
    <link rel="stylesheet" href="../CSS/brain-games/puzzle-math.css">
    <link rel="stylesheet" href="../CSS/brain-games/libs/bootstrap.min.css">
    <title>Puzzle Math</title>
</head>
<?php include "../navbar.php"?>
<body>
	<div class="container">
		<!-- Modal -->
		<div class="modal" id="startGame" tabindex="-1" role="dialog" aria-labelledby="gameTitleLabel"
			aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="gameTitleLabel">Math Game</h5>
					</div>
					<div class="modal-body">
						The goal of this game is to get as many correct math problems as you can. All problems are
						randomly generated and have to be answered within 10 seconds.
						<br /><br />
						<strong>Tips:</strong> <br />
						- You may use 0-9 on a keyboard or numpad. <br />
						- Only answers from 0-9 can appear.<br />
						- All numbers are between 0 and 25.<br />
						- Multiplication only occurs if 1 number is between 0 and 10.<br />
						- Division only occurs if there is no remainder.<br />
						- You will be notified of a correct or incorrect answer.<br />
						<br />
						Have Fun! 
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-lg btn-primary" onclick="startGame()"
							data-dismiss="modal">Begin</button>
					</div>
				</div>
			</div>
		</div>
		<div class="row no-gutters">
			<div class="col-12 col-lg-6 offset-lg-3 calculator">
				<div class="box">
					<div class="row">
						<div class="col-6 timer-box offset-3">
							<div id="timer"></div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 text-center owner">Math Game</div>
					</div>
					<div class="row">
						<div id="equation" class="col-10 offset-1" data-toggle="tooltip" data-placement="bottom"
							title="Good job!">
							<span id="left1">(</span>
							<span id="num1"></span>
							<span id="opt1"></span>
							<span id="left2">(</span>
							<span id="num2"></span>
							<span id="right1">)</span>
							<span id="opt2"></span>
							<span id="num3"></span>
							<span id="right2">)</span>
							<span>=</span>
							<span id="equals">?&nbsp;</span>
						</div>
					</div>
					<div style="margin: 5px"></div>
					<div class="row">
						<div class="col-10 offset-1">
							<div class="light" id="correct" data-toggle="tooltip" data-placement="right"
								title="Correct!"></div>
							<div class="light" id="wrong" data-toggle="tooltip" data-placement="left"
								title="Incorrect!"></div>
						</div>
					</div>
				</div>
				<div class="buttons">
					<div class="row">
						<div class="col-12 text-center">
							<div onclick="pressButton(1)" id="Button1" class="keypad">1</div>
							<div onclick="pressButton(2)" id="Button2" class="keypad">2</div>
							<div onclick="pressButton(3)" id="Button3" class="keypad">3</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 text-center">
							<div onclick="pressButton(4)" id="Button4" class="keypad">4</div>
							<div onclick="pressButton(5)" id="Button5" class="keypad">5</div>
							<div onclick="pressButton(6)" id="Button6" class="keypad">6</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 text-center">
							<div onclick="pressButton(7)" id="Button7" class="keypad">7</div>
							<div onclick="pressButton(8)" id="Button8" class="keypad">8</div>
							<div onclick="pressButton(9)" id="Button9" class="keypad">9</div>
						</div>
					</div>
					<div class="row">
						<div class="col-12 text-center">
							<div onclick="location.reload();" class="keypad help">Reset</div>
							<div onclick="pressButton(0)" id="Button0" class="keypad">0</div>
							
						</div>
					</div>
				</div>
				<div class="empty"></div>
			</div>
		</div>
	</div>
    <script src="../JavaScript/brain-games/puzzle-math/libs/jquery-3.5.1.slim.min.js"></script>
	<script src="../JavaScript/brain-games/puzzle-math/libs/bootstrap.bundle.min.js"></script>
    <script src="../JavaScript/brain-games/puzzle-math/puzzle-math.js"></script>
	<script src="../JavaScript/navbar/nav-behaviour.js"></script>
</body>