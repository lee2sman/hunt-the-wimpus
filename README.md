# Hunt The Wimpus

A very simple 1dimensional Hunt The Wumpus adaptation for the BBC MicroBit. I tried out the block-based editor and jumped back and forth between that and the *javascript* editor, though this is not a normal form of javascript.

Graphics were selected or drawn in the blocks image pixel-drawing editor.

## Gameplay

You are a *Hunter* dropped somewhere in the 1dimensional 12spaces dungeon. The dungeon is a giant circle. In other words, when you get to the end it loops back around to the other side. In addition to you there is a Wimpus, a Pit, and 2 Bats. You have one arrow in which to slay the Wimpus, so use it wisely or else you'll be eaten...

Move right or left with the A or B button. When you're ready to shoot your arrow, shake the Microbit and then press left or right to shoot your arrow. You must be exactly one space away and shooting in the correct direction. Good luck! If you miss, you're dead.

Bats: Landing on a bat will transport you randomly to another location in the dungeon. There is no *warning* prior to you land on a bat. When you see the bat it means you've been picked up and transported somewhere new. 

Pit: Walk into a pit and you fall to your death. You will feel a slight draft when you are one space away, your only warning.

Wimpus: The Wimpus is deadly. You will see a bloody floor 1 and 2 spaces away from the Wimpus. 

Note that a space could have multiple things in it: blood, bat and/or pit.

## Graphics

Beautiful 5x5 pixel graphic display

##### You, a Wimpus hunter

![Hunter](wimpus-hunter.png)

##### The Wimpus hunter at the start, full of blood and heart

![hunter's heart](wimpus-heart.png)

##### The hunter walks right

![Hunter walking right](wimpus-right.png)

##### The hunter walks left

![Hunter walking left](wimpus-left.png)

##### A Bat, who must have just picked you up and dropped you somewhere

![Bat](wimpus-bat.png)  

### Warnings:


#### "You feel a breeze" aka Pit nearby

![pit](wimpus-pit.png)

#### "Bloody floor" aka Wimpus nearby

![blood](wimpus-blood.png)

### Death

#### You fell in a pit && you're dead

![fell in a pit](wimpus-fell.png)

##### A dead Hunter, slain by a Wimpus

![dead hunter](wimpus-dead.png)

Note: there are other graphics as well, but the Wimpus resists documentation. (If you stopped to photograph/draw it, you'd be eaten!)


## Edit this project ![Build status badge](https://github.com/lee2sman/hunt-the-wimpus/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/lee2sman/hunt-the-wimpus** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/lee2sman/hunt-the-wimpus/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
