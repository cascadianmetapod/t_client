// !LOCNS:galactic_war
define(['shared/gw_common'], function (GW) {
    return {
        visible: function(params) { return true; },
        describe: function(params) { 
            return '!LOC:Bot Combat Tech increases health of all bots by 50%, damage by 25%, and speed by 50%';
        },
        summarize: function(params) {
            return '!LOC:Bot Combat Tech';
        },
        icon: function(params) {
            return 'coui://ui/main/game/galactic_war/gw_play/img/tech/gwc_bot_combat.png';
        },
        audio: function (parms) {
            return {
                found: 'PA/VO/Computer/gw/board_tech_available_combat'
            }
        },
        getContext: function (galaxy) {
            return {
                totalSize: galaxy.stars().length
            };
        },
        deal: function (system, context, inventory) {
            var chance = 0;
            if( inventory.hasCard('gwc_enable_bots_t1') || inventory.hasCard('gwc_enable_bots_all') || inventory.hasCard('gwc_start_bots') )
                chance = 60;

            return { chance: chance };
        },
        buff: function(inventory, params) {
            var units = [
                '/pa/units/land/fabrication_bot/fabrication_bot.json',
                '/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json',
                '/pa/units/land/assault_bot/assault_bot.json',
                '/pa/units/land/bot_grenadier/bot_grenadier.json',
                '/pa/units/land/bot_tactical_missile/bot_tactical_missile.json',
                '/pa/units/land/bot_bomb/bot_bomb.json',
                '/pa/units/land/fabrication_bot_adv/fabrication_bot_adv.json',
                '/pa/units/land/fabrication_bot_combat_adv/fabrication_bot_combat_adv.json',
                '/pa/units/land/assault_bot_adv/assault_bot_adv.json',
                '/pa/units/land/bot_tesla/bot_tesla.json',
                '/pa/units/land/bot_nanoswarm/bot_nanoswarm.json',
				'/pa/units/land/bot_sun/bot_sun.json',
                '/pa/units/land/bot_support_commander/bot_support_commander.json'
            ];
            var mods = [];
            var modUnit = function (unit) {
                mods.push({
                    file: unit,
                    path: 'navigation.move_speed',
                    op: 'multiply',
                    value: 1.5
                });
                mods.push({
                    file: unit,
                    path: 'navigation.brake',
                    op: 'multiply',
                    value: 1.5
                });
                mods.push({
                    file: unit,
                    path: 'navigation.acceleration',
                    op: 'multiply',
                    value: 1.5
                });
                mods.push({
                    file: unit,
                    path: 'navigation.turn_speed',
                    op: 'multiply',
                    value: 1.5
                });
                mods.push({
                    file: unit,
                    path: 'max_health',
                    op: 'multiply',
                    value: 1.5
                });
            };
            _.forEach(units, modUnit);
            var ammos = [
                '/pa/units/land/assault_bot/assault_bot_ammo.json',
                '/pa/units/land/bot_tactical_missile/bot_tactical_missile_ammo.json',
                '/pa/units/land/bot_bomb/bot_bomb_ammo.json',
                '/pa/units/land/assault_bot_adv/assault_bot_adv_ammo.json',
                '/pa/units/land/bot_sniper/bot_sniper_ammo.json',
                '/pa/units/land/bot_tesla/bot_tesla_ammo.json',
                '/pa/units/land/bot_nanoswarm/bot_nanoswarm_ammo.json',
                '/pa/units/land/bot_support_commander/bot_support_commander_ammo.json'
            ];
            var ammoMod = function (ammo) {
                mods.push({
                    file: ammo,
                    path: 'damage',
                    op: 'multiply',
                    value: 1.25
                });
            };
            _.forEach(ammos, ammoMod);
            inventory.addMods(mods);
        },
        dull: function(inventory) {
        }
    };
});
