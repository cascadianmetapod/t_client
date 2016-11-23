var Build = (function() {
    var FALLBACK_ICON = 'coui://ui/main/game/live_game/img/build_bar/img_missing_unit.png';
    var pathWithoutExtensionMatch = /(.*)\.json[^\/]*$/;

    var iconForSpecId = function(id)
    {
        var match = null;
        if (id)
            match = pathWithoutExtensionMatch.exec(id);

        if (_.size(match) < 2)
            return FALLBACK_ICON;

        return 'coui:/' + match[1] + '_icon_buildbar.png';
    };

    var iconForUnit = function (unit)
    {
        if (!unit)
            return FALLBACK_ICON;
        return iconForSpecId(unit.id);
    };

    var HotkeyModel = function() {
        var self = this;

        self.SpecIdToGridMap = ko.observable(
            {
               
                "/pa/units/land/control_module/control_module.json": ["utility", 1],
                "/pa/units/land/radar_adv/radar_adv.json": ["utility", 8],
                "/pa/units/land/energy_plant_adv/energy_plant_adv.json": ["utility", 3],
                "/pa/units/land/metal_extractor_adv/metal_extractor_adv.json": ["utility", 4],
                
				"/pa/units/land/engineering_station/engineering_station.json": ["utility", 6],
				"/pa/units/land/advanced_engineering_station/advanced_engineering_station.json": ["utility", 7],
                "/pa/units/orbital/orbital_def/orbital_def.json": ["utility", 17],
				"/pa/units/land/radar/radar.json": ["utility", 14],
                "/pa/units/land/energy_plant/energy_plant.json": ["utility", 9],
                "/pa/units/land/metal_extractor/metal_extractor.json": ["utility", 10],
                "/pa/units/land/land_barrier/land_barrier.json": ["utility", 12],
                "/pa/units/land/teleporter/teleporter.json": ["utility", 13],
                "/pa/units/orbital/deep_space_radar/deep_space_radar.json": ["utility", 2],
                "/pa/units/land/energy_storage/energy_storage.json": ["utility", 15],
                "/pa/units/land/metal_storage/metal_storage.json": ["utility", 16],


                "/pa/units/air/titan_air/titan_air.json": ["factory", 2],
                "/pa/units/land/titan_bot/titan_bot.json": ["factory", 3],
                "/pa/units/land/titan_vehicle/titan_vehicle.json": ["factory", 4],
              
                "/pa/units/sea/naval_factory_adv/naval_factory_adv.json": ["factory", 7],
                "/pa/units/air/air_factory_adv/air_factory_adv.json": ["factory", 8],
                "/pa/units/land/bot_factory_adv/bot_factory_adv.json": ["factory", 9],
                "/pa/units/land/vehicle_factory_adv/vehicle_factory_adv.json": ["factory", 10],
                "/pa/units/orbital/orbital_launcher/orbital_launcher.json": ["factory", 12],
                "/pa/units/sea/naval_factory/naval_factory.json": ["factory", 13],
                "/pa/units/air/air_factory/air_factory.json": ["factory", 14],
                "/pa/units/land/bot_factory/bot_factory.json": ["factory", 15],
                "/pa/units/land/vehicle_factory/vehicle_factory.json": ["factory", 16],


                
                "/pa/units/land/artillery_long/artillery_long.json": ["combat", 2],
              
              
             
                "/pa/units/land/rocket_defense/rocket_defense.json":["combat", 16],
                "/pa/units/land/air_defense/air_defense.json":["combat", 17],
                
				
               
                
                
               
             
                
               
              
				"/pa/units/land/artillery_comet/artillery_comet.json":["combat", 1],
				"/pa/units/land/artillery_morningstar/artillery_morningstar.json":["combat", 5],


                

           
              "/pa/units/land/mb1/mb1.json": ["vehicle", 2],
                "/pa/units/land/tank_attack/tank_attack.json": ["vehicle", 14],
                "/pa/units/land/tank_heavy/tank_heavy.json": ["vehicle", 1],
                "/pa/units/land/tank_orbital/tank_orbital.json": ["vehicle", 8],
                "/pa/units/land/tank_heavy_mortar/tank_heavy_mortar.json": ["vehicle", 9],
                
                "/pa/units/land/tank_heavy_meteor/tank_heavy_meteor.json": ["vehicle", 3],	
                
               "/pa/units/land/a_tank/a_tank.json": ["vehicle", 12],
               "/pa/units/land/tank_tank/tank_tank.json": ["vehicle", 13],
               
                "/pa/units/land/aa_missile_vehicle/aa_missile_vehicle.json": ["vehicle", 16],
				 "/pa/units/land/combat_fab_veh/combat_fab_veh.json": ["vehicle", 17],
				 "/pa/units/land/bomb_bike/bomb_bike.json": ["vehicle", 15],
               


                "/pa/units/land/bot_support_commander/bot_support_commander.json": ["bot", 0],
                
                "/pa/units/land/bot_nanoswarm/bot_nanoswarm.json": ["bot", 11], 
				 "/pa/units/land/bot_stealth/bot_stealth.json": ["bot", 10],
				 "/pa/units/land/raptor_bot_1/raptor_bot_1.json": ["bot", 9], 
			   "/pa/units/land/bot_siege/bot_siege.json": ["bot", 8], 
                "/pa/units/land/bot_ubercannon/bot_ubercannon.json": ["bot", 1], 
               "/pa/units/land/mb2/mb2.json": ["bot", 2], 
               "/pa/units/land/megabot/megabot.json": ["bot", 3],
                
               
                
               

               
               
                
                "/pa/units/land/fabrication_bot_combat/fabrication_bot_combat.json": ["bot", 16],
              "/pa/units/land/hound/hound.json": ["bot", 12],
			  "/pa/units/land/a_assault_bot/a_assault_bot.json": ["bot", 13],
                "/pa/units/land/bot_pop/bot_pop.json": ["bot", 15],
				"/pa/units/land/bot_sun/bot_sun.json": ["bot", 17],
                "/pa/units/land/bot_drone/bot_drone.json": ["bot", 14],

                "/pa/units/air/bomber_naval/bomber_naval.json": ["air", 7],
               "/pa/units/air/a_fighter_adv/a_fighter_adv.json": ["air", 8],
               "/pa/units/air/a_bomber_adv/a_bomber_adv.json": ["air", 9],
 
           
              "/pa/units/air/raven/raven.json": ["air", 12],
              "/pa/units/air/a_fighter/a_fighter.json": ["air", 13],
			  "/pa/units/air/bomber_ball/bomber_ball.json": ["air", 14],
              "/pa/units/air/air_tank/air_tank.json": ["air", 15],
              "/pa/units/air/cloud/cloud.json": ["air", 16],
              "/pa/units/air/a_transport/a_transport.json": ["air", 17],
               
 
           
           
              
              
                
               
               

     

              

				"/pa/units/sea/bolide/bolide.json": ["sea",11],
                
                
                "/pa/units/sea/nuclear_sub/nuclear_sub.json": ["sea", 9],
                
            
                
                "/pa/units/sea/fabrication_barge/fabrication_barge.json": ["sea",17],


				
                "/pa/units/orbital/titan_orbital/titan_orbital.json": ["orbital_structure", 6],
                "/pa/units/orbital/defense_satellite/defense_satellite.json": ["orbital_structure", 12],
                "/pa/units/orbital/mining_platform/mining_platform.json": ["orbital_structure", 13],
                "/pa/units/orbital/orbital_factory/orbital_factory.json": ["orbital_structure", 14],
                "/pa/units/orbital/orbital_anti_nuke/orbital_anti_nuke.json": ["orbital_structure", 15],
				"/pa/units/orbital/jump_gate/jump_gate.json": ["orbital_structure", 16],

               
                "/pa/units/orbital/orbital_bombardier/orbital_bombardier.json": ["orbital", 5],
                "/pa/units/orbital/solar_array/solar_array.json": ["orbital", 6],
                
                "/pa/units/orbital/radar_satellite_adv/radar_satellite_adv.json": ["orbital", 8],
                "/pa/units/orbital/hailfire/hailfire.json": ["orbital", 2],	
				"/pa/units/orbital/orbital_armageddon/orbital_armageddon.json": ["orbital", 1],				
                

                "/pa/units/orbital/orbital_fabrication_bot/orbital_fabrication_bot.json": ["orbital", 12],
                
                "/pa/units/orbital/radar_satellite/radar_satellite.json": ["orbital", 14],
                "/pa/units/orbital/orbital_lander/orbital_lander.json": ["orbital", 15],
                "/pa/units/orbital/orbital_missile/orbital_missile.json": ["orbital", 16],
                
				"/pa/units/land/recon_bug/recon_bug.json": ["ammo", 12],
	            "/pa/units/land/air_mine/air_mine.json": ["ammo", 13],
				"/pa/units/land/time_bomb/time_bomb.json": ["ammo", 10],
                "/pa/units/land/land_mine/land_mine.json": ["ammo", 14],
                "/pa/units/land/anti_nuke_launcher/anti_nuke_launcher_ammo.json": ["ammo", 15],
                "/pa/units/land/nuke_launcher/nuke_launcher_ammo.json": ["ammo", 16]
            }
        );
    };

    return {
        iconForSpecId: iconForSpecId,
        iconForUnit: iconForUnit,
        HotkeyModel: HotkeyModel,
    };
})();
