var scriptName = "ComboMarat";
var scriptAuthor = "Soulplexis";
var scriptVersion = 1.0;

var colorIndex = 0;

function randomIntFrom(min,max) // Get a random integer from [min] to [max] 
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
function printMessage(message) {
    var availableColors = ["§c[§4ComboMarat§c] §7", "§c[§4ComboMarat§c] §f"];

    var color = availableColors[colorIndex];
    
    colorIndex += 1;
    if (colorIndex >= availableColors.length) {
        colorIndex = 0;
    }

    chat.print(color + message + "§r");

}
var ComboMarat = moduleManager.getModule("Criticals");


function ColorChatModule() {
    var value = 0;
  
function ComboMarat() {
    var amountValue = IntegerValue("Packets", 200, 0, 500)
    var swingValue = ListValue("SwingMode", arrayOf("Normal","Packet"), "Normal")
    var delayValue = createFloat("Delay", 10, 0, 666)
    var hurttimeValue = createFloat("CustomHurtTime", 10, 0, 66)
    var motionyValue = createFloat("MotionY", 0.13, 0, 6.66)
    this.getName = function() {
        return "ComboMarat";
    }

    this.getCategory = function() {
        return "Combat";   
    }

    this.getDescription = function() {
        return "Counts hits and then criticals.";
    }
	this.onEnable = function() {
		value = 0;
		criticalstate = Criticals.state;
	}

    this.onAttack = function() {
		value += 1;
        if (mc.thePlayer.motionY < -0.08 || Criticals.state == true) {
			printMessage("§l§o操你妈!是暴击!! " + value);
        } else {
			printMessage("连击! " + value);
		}
    }
	this.onDisable = function() {
		value = 0;
	}
}

var colorChatModule = new ColorChatModule();
var colorChatModuleClient;

function onEnable() {
    colorChatModuleClient = moduleManager.registerModule(colorChatModule);
}

function onDisable() {
    moduleManager.unregisterModule(colorChatModuleClient);
}
