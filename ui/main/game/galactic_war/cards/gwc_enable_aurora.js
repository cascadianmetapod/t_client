// !LOCNS:galactic_war
define(['shared/gw_common'], function (GW) {
    return {
        visible: function(params) { return true; },
        describe: function(params) { 
            return '!LOC:Activates the Tech to build rapid-fire artillery units and structures.';
        },
        summarize: function(params) {
            return '!LOC:Aurora Tech';
        },
        icon: function(params) {
            return 'coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_artillery.png';
        },
        audio: function (parms) {
            return {
                found: '/VO/Computer/gw/board_tech_available_artillery'
            }
        },
        getContext: function (galaxy) {
            return {
                totalSize: galaxy.stars().length
            };
        },
        deal: function (system, context, inventory) {
            var chance = 0;
            if( inventory.hasCard('gwc_enable_artillery') || inventory.hasCard('gwc_start_artillery') )
            {
                chance = 50;
            }
            return { chance: chance };

        },
        buff: function(inventory, params) {
            inventory.addUnits([
                '/pa/units/land/artillery_comet/artillery_comet.json',             
                '/pa/units/land/bot_sun/bot_sun.json',
				'/pa/units/land/artillery_morningstar/artillery_morningstar.json',
				'/pa/units/land/tank_heavy_meteor/tank_heavy_meteor.json',
				'/pa/units/sea/bolide/bolide.json'
				
            ]);
        },
        dull: function(inventory) {
        }
    };
});
