
define(['shared/gw_common'], function (GW) {
    return {
        visible: function(params) { return true; },
        describe: function(params) { 
            return '!LOC:High-Explosive Shells Tech increases the splashradius of all artillery structures by 25%. Requires technology to build artillery structures and units.';
        },
        summarize: function(params) {
            return '!LOC:High-Explosive Shells Tech';
        },
        icon: function(params) {
            return 'coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_artillery.png';
        },
        audio: function (parms) {
            return {
                found: '/VO/Computer/gw/board_tech_available_ammunition'
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
                chance = 5;

            return { chance: chance };

        },
        buff: function(inventory, params) {
            var units = [
                '/pa/units/land/artillery_short/artillery_short_ammo.json',
                '/pa/units/land/artillery_long/artillery_long_ammo.json', 
				'/pa/units/land/artillery_comet/artillery_comet.json',
                '/pa/units/land/artillery_morningstar/artillery_morningstar.json'
            ];
            var mods = [];
            var modUnit = function(unit) {        
                mods.push({
                    file: unit,
                    path: 'splash_radius',
                    op: 'multiply',
                    value: 1.25
                });
            };
            _.forEach(units, modUnit);
           
    };
});
