<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solitaire</title>
    <link rel="stylesheet" href="../CSS/brain-games/solitaire.css">
    <link rel="stylesheet" href="../CSS/navbar.css">
</head>

<?php 
include "../navbar.php";
?>

<body>
    <br><br>
    <!-- Solitaire Container -->
    <div class="container">
        <div id="score">
            <div class="timer">
                <button id="play-pause">
                    <i id="play">Play</i>
                    <i id="pause">Pause</i>
                </button>
                <label>Timer:</label>
                <span>00:00</span>
            </div>

            <div class="move-count" data-moves="0">
                <label>Moves:</label>
                <span>0</span>
            </div>

            <div class="score" data-score="0">
                <label>Score:</label>
                <span>0</span>
            </div>
        </div>

        <div id="table">
            <div class="upper-row">
                <div id="stock" class="stock pile" data-pile="stock">
                    <i class="reload-icon" data-action="reload">
                    <span></span>
                    </i>
                    <ul></ul>
                </div>

                <div id="waste" class="waste pile" data-pile="waste">
                    <ul></ul>
                </div>

                <ul id="fnd" class="fnd">
                    <li id="spades" class="spades pile" data-pile="spades" data-empty="true">
                    <ul></ul>
                    </li>

                    <li id="hearts" class="hearts pile" data-pile="hearts" data-empty="true">
                    <ul></ul>
                    </li>

                    <li id="diamonds" class="diamonds pile" data-pile="diamonds" data-empty="true">
                    <ul></ul>
                    </li>

                    <li id="clubs" class="clubs pile" data-pile="clubs" data-empty="true">
                    <ul></ul>
                    </li>
                </ul>
            </div>

            <div class="lower-row">
                <ul id="tab" class="tab">
                    <li class="pile" data-pile="1"><ul></ul></li>
                    <li class="pile" data-pile="2"><ul></ul></li>
                    <li class="pile" data-pile="3"><ul></ul></li>
                    <li class="pile" data-pile="4"><ul></ul></li>
                    <li class="pile" data-pile="5"><ul></ul></li>
                    <li class="pile" data-pile="6"><ul></ul></li>
                    <li class="pile" data-pile="7"><ul></ul></li>
                </ul>
            </div>
        </div>
        </div><!-- End of container -->

        <button id="auto-win">Auto Win</button>
        <canvas id="confetti"></canvas>
        <ul class="template">
        <li data-rank="2">
            <div class="two {{suit}}">
                <div class="corner top">
                    <span class="rank">2</span>
                    <span class="suit"></span>
                </div>

                <span class="suit top_center"></span>
                <span class="suit bottom_center"></span>
                <div class="corner bottom">
                    <span class="rank">2</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="3">
            <div class="three {{suit}}">
                <div class="corner top">
                    <span class="rank">3</span>
                    <span class="suit"></span>
                </div>

                <span class="suit top_center"></span>
                <span class="suit middle_center"></span>
                <span class="suit bottom_center"></span>

                <div class="corner bottom">
                    <span class="rank">3</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="4">
            <div class="four {{suit}}">
                <div class="corner top">
                    <span class="rank">4</span>
                    <span class="suit"></span>
                </div>

                <span class="suit top_left"></span>
                <span class="suit top_right"></span>
                <span class="suit bottom_left"></span>
                <span class="suit bottom_right"></span>
                
                <div class="corner bottom">
                    <span class="rank">4</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="5">
            <div class="five {{suit}}">
                <div class="corner top">
                    <span class="rank">5</span>
                    <span class="suit"></span>
                </div>
                <span class="suit top_left"></span>
                <span class="suit top_right"></span>
                <span class="suit middle_center"></span>
                <span class="suit bottom_left"></span>
                <span class="suit bottom_right"></span>
                <div class="corner bottom">
                    <span class="rank">5</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="6">
            <div class="six {{suit}}">
                <div class="corner top">
                    <span class="rank">6</span>
                    <span class="suit"></span>
                </div>
                <span class="suit top_left"></span>
                <span class="suit top_right"></span>
                <span class="suit middle_left"></span>
                <span class="suit middle_right"></span>
                <span class="suit bottom_left"></span>
                <span class="suit bottom_right"></span>
                <div class="corner bottom">
                    <span class="rank">6</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="7">
            <div class="seven {{suit}}">
                <div class="corner top">
                    <span class="rank">7</span>
                    <span class="suit"></span>
                </div>
                <span class="suit top_left"></span>
                <span class="suit top_right"></span>
                <span class="suit middle_left"></span>
                <span class="suit middle_top"></span>
                <span class="suit middle_right"></span>
                <span class="suit bottom_left"></span>
                <span class="suit bottom_right"></span>
                <div class="corner bottom">
                    <span class="rank">7</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="8">
            <div class="eight {{suit}}">
                <div class="corner top">
                    <span class="rank">8</span>
                    <span class="suit"></span>
                </div>
                <span class="suit top_left"></span>
                <span class="suit top_right"></span>
                <span class="suit middle_left"></span>
                <span class="suit middle_top_center"></span>
                <span class="suit middle_right"></span>
                <span class="suit middle_bottom_center"></span>
                <span class="suit bottom_left"></span>
                <span class="suit bottom_right"></span>
                <div class="corner bottom">
                    <span class="rank">8</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="9">
            <div class="nine {{suit}}">
                <div class="corner top">
                    <span class="rank">9</span>
                    <span class="suit"></span>
                </div>
                <span class="suit top_left"></span>
                <span class="suit top_right"></span>
                <span class="suit middle_top_left"></span>
                <span class="suit middle_center"></span>
                <span class="suit middle_top_right"></span>
                <span class="suit bottom_left"></span>
                <span class="suit bottom_right"></span>
                <span class="suit middle_bottom_left"></span>
                <span class="suit middle_bottom_right"></span>
                <div class="corner bottom">
                    <span class="rank">9</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="10">
            <div class="ten {{suit}}">
                <div class="corner top">
                    <span class="rank">10</span>
                    <span class="suit"></span>
                </div>
                <span class="suit top_left"></span>
                <span class="suit top_right"></span>
                <span class="suit middle_top_left"></span>
                <span class="suit middle_top_center"></span>
                <span class="suit middle_top_right"></span>
                <span class="suit bottom_left"></span>
                <span class="suit bottom_right"></span>
                <span class="suit middle_bottom_center"></span>
                <span class="suit middle_bottom_left"></span>
                <span class="suit middle_bottom_right"></span>
                <div class="corner bottom">
                    <span class="rank">10</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="J">
            <div class="jack {{suit}}">
                <div class="corner top">
                    <span class="rank">J</span>
                    <span class="suit"></span>
                </div>
                <span class="face middle_center"></span>
                <div class="corner bottom">
                    <span class="rank">J</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="Q">
            <div class="queen {{suit}}">
                <div class="corner top">
                    <span class="rank">Q</span>
                    <span class="suit"></span>
                </div>
                <span class="face middle_center"></span>
                <div class="corner bottom">
                    <span class="rank">Q</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="K">
            <div class="king {{suit}}">
                <div class="corner top">
                    <span class="rank">K</span>
                    <span class="suit"></span>
                </div>
                <span class="face middle_center"></span>
                <div class="corner bottom">
                    <span class="rank">K</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>

        <li data-rank="A">
            <div class="ace {{suit}}">
                <div class="corner top">
                    <span class="rank">A</span>
                    <span class="suit"></span>
                </div>
                <span class="suit middle_center"></span>
                <div class="corner bottom">
                    <span class="rank">A</span>
                    <span class="suit"></span>
                </div>
            </div>
        </li>
        </ul><!-- End of templates -->

    <script src="../JavaScript/brain-games/solitaire/solitaire.js"></script>
    <script src="../JavaScript/navbar/nav-behaviour.js"></script>
</body>