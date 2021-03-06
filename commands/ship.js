const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
const char = require('../chars.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ship')
    .setDescription('Ships two characters. You can specify characters to ship, or none to bring up our character picker!')
    .addStringOption(option =>
      option.setName('character1')
        .setDescription('The name of the first character. OPTIONAL.')
        .setRequired(false))
    .addStringOption(option =>
      option.setName('character2')
        .setDescription('The name of the second character. OPTIONAL.')
        .setRequired(false)),
  async execute(interaction) {
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select1')
          .setPlaceholder('Bluey\'s Family...')
          .addOptions([
            { label: 'Bluey', value: '1', },
            { label: 'Bingo', value: '2', },
            { label: 'Bandit', value: '3', },
            { label: 'Chilli', value: '4', },
            { label: 'Muffin', value: '32', },
            { label: 'Socks', value: '33', },
            { label: 'Uncle Stripe', value: '40', },
            { label: 'Aunt Trixie', value: '41', },
            { label: 'Rad', value: '63', },
            { label: 'Bob', value: '43', },
            { label: 'Nana', value: '44', },
            { label: 'Mort', value: '69', }
          ]),
      );
    const row1 = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select2')
          .setPlaceholder('Kids...')
          .addOptions([
            { label: 'Mackenzie', value: '6', },
            { label: 'Jean-Luc', value: '21', },
            { label: 'Lucky', value: '22', },
            { label: 'Indy', value: '23', },
            { label: 'CoCo', value: '24', },
            { label: 'Snickers', value: '25', },
            { label: 'Honey', value: '26', },
            { label: 'Chloe', value: '28', },
            { label: 'Judo', value: '29', },
            { label: 'Rusty', value: '30', },
            { label: 'Pretzel', value: '34', },
            { label: 'Bentley', value: '35', },
            { label: 'Missy', value: '36', },
            { label: 'Gruber', value: '37', },
            { label: 'Juniper', value: '38', },
            { label: 'Buddy', value: '39', },
            { label: 'Winton', value: '47', },
            { label: 'Jack', value: '58', },
            { label: 'Lila', value: '62', },
            { label: 'Daisy', value: '70', },
            { label: 'Harley', value: '74', },
            { label: 'Hercules', value: '75', },
            { label: 'Mia', value: '79', },
            { label: 'Captain', value: '66', }
          ]),

      );
    const row2 = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select3')
          .setPlaceholder('Adult Males...')
          .addOptions([
            { label: 'Pat', value: '5', },
            { label: 'Rusty\'s dad', value: '31', },
            { label: 'Winton\'s Dad', value: '15', },
            { label: 'Chloe\'s Dad', value: '16', },
            { label: 'Honey\'s Dad', value: '17', },
            { label: 'Gruber\'s Dad', value: '18', },
            { label: 'Mackenzie\'s Dad', value: '19', },
            { label: 'Jean-Luc\'s Dad', value: '20', },
            { label: 'Postie', value: '81', },
            { label: 'Jasper W', value: '77', },
            { label: 'Fido', value: '72', },
            { label: 'Chris', value: '69', },
            { label: 'Alfie', value: '64', },
            { label: 'Jack\'s Dad', value: '59', },
            { label: 'Rocko', value: '57', },
            { label: 'Customer', value: '55', },
            { label: 'Docket Boy', value: '49', },
            { label: 'Poffertje Dog', value: '48', },
            { label: 'Busker', value: '46', }
          ]),

      );
    const row3 = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('select4')
          .setPlaceholder('Adult Females...')
          .addOptions([
            { label: 'Mackenzie\'s Mum', value: '7', },
            { label: 'Honey\'s Mum', value: '8', },
            { label: 'Juniper\'s Mum', value: '9', },
            { label: 'Coco\'s Mum', value: '10', },
            { label: 'Indy\'s Mum', value: '11', },
            { label: 'Chloe\'s Mum', value: '12', },
            { label: 'Jean-Luc\'s Mum', value: '13', },
            { label: 'Snickers\' Mum', value: '14', },
            { label: 'Wendy', value: '42', },
            { label: 'Calypso', value: '45', },
            { label: 'Doctor', value: '50', },
            { label: 'Nurse', value: '51', },
            { label: 'Surfer', value: '52', },
            { label: 'Checkout Lady', value: '53', },
            { label: 'Vet Corgi', value: '54', },
            { label: 'Mrs. Retriever', value: '56', },
            { label: 'Jack\'s Mum', value: '60', },
            { label: 'Bella', value: '65', },
            { label: 'Checkout Dog', value: '67', },
            { label: 'Pony Lady', value: '80', },
            { label: 'Sadie', value: '82', },
            { label: 'Shanelle', value: '83', }
          ]),

      );
    const row4 = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('shipper')
          .setLabel('Ship!')
          .setDisabled(true)
          .setStyle('PRIMARY'),
      );
    var action1 = null;
    var action2 = null;
    if (interaction.options.getString('character1') != null){
    var action1 = await finder(interaction.options.getString('character1'), char);
    }
    if (interaction.options.getString('character2') != null){
    var action2 = await finder(interaction.options.getString('character2'), char);
    }
    const message = await interaction.reply({ content: 'Select the first character to ship!\nYour selection: **TBA** and **TBA**.', components: [row, row1, row2, row3, row4], fetchReply: true });
    if ((action1 != null) && (action2 != null)) {
      row.components[0].setDisabled(true);
      row1.components[0].setDisabled(true);
      row2.components[0].setDisabled(true);
      row3.components[0].setDisabled(true);
      row4.components[0].setDisabled(false);
      message.edit({ content: `Click the button below to ship!\nYour selection: **${char[action1 - 1].name}** and **${char[action2 - 1].name}**.`, components: [row, row1, row2, row3, row4] });
    } else if ((action1 == null) && (action2 != null)){
      message.edit({ content: `Select the first character to ship!\nYour selection: **TBA** and **${char[action2 - 1].name}**.`, components: [row, row1, row2, row3, row4] });
    } else if ((action1 != null) && (action2 == null)){
      message.edit({ content: `Select the second character to ship!\nYour selection: **${char[action1 - 1].name}** and **TBA**.`, components: [row, row1, row2, row3, row4] });
    }
    const collector = message.createMessageComponentCollector({ componentType: 'SELECT_MENU', time: 100000 });
    console.log(1);
    collector.on('collect', i => {
      if (i.user.id === interaction.user.id) {
        if (action1 == null) {
          action1 = i.values[0];
        } else {
          action2 = i.values[0];
        }
        if ((action1 != null) && (action2 != null)) {
          row.components[0].setDisabled(true);
          row1.components[0].setDisabled(true);
          row2.components[0].setDisabled(true);
          row3.components[0].setDisabled(true);
          row4.components[0].setDisabled(false);
          i.update({ content: `Click the button below to ship!\nYour selection: **${char[action1 - 1].name}** and **${char[action2 - 1].name}**.`, components: [row, row1, row2, row3, row4] });
        } else {
          i.update({ content: `Select the second character to ship!\nYour selection: **${char[action1 - 1].name}** and **TBA**.`, components: [row, row1, row2, row3, row4] });
        }

      } else {
        i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
      }
    });

    collector.on('end', collected => {
      console.log(`Collected ${collected.size} interactions.`);

    });
    const collector1 = message.createMessageComponentCollector({ componentType: 'BUTTON', time: 100000 });
    console.log(3);
    collector1.on('collect', i => {
      if (i.user.id === interaction.user.id) {
        i.reply({ content: `${deter(action1 - 1, action2 - 1)}` });
        collector.emit('end', collector.collected);
        collector1.emit('end', collector1.collected);
      } else {
        i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
      }
    });

    collector1.on('end', collected => {
      console.log(`Collected interactions.`);
      if (collected.size == 0 && action1 == null && action2 == null) {
        row.components[0].setDisabled(true);
        row1.components[0].setDisabled(true);
        row2.components[0].setDisabled(true);
        row3.components[0].setDisabled(true);
        row4.components[0].setDisabled(true);
        message.edit({ content: `This command timed out!`, components: [row, row1, row2, row3, row4] });
      } else if (collected.size == 1) {
        row.components[0].setDisabled(true);
        row1.components[0].setDisabled(true);
        row2.components[0].setDisabled(true);
        row3.components[0].setDisabled(true);
        row4.components[0].setDisabled(true);
        message.edit({ content: `Your ship result is below!\nYour selection: **${char[action1 - 1].name}** and **${char[action2 - 1].name}**.`, components: [row, row1, row2, row3, row4] });
      } else if (collected.size == 0 && action2 != null && action1 != null) {
        row.components[0].setDisabled(true);
        row1.components[0].setDisabled(true);
        row2.components[0].setDisabled(true);
        row3.components[0].setDisabled(true);
        row4.components[0].setDisabled(true);
        message.edit({ content: `This command timed out!\nYour selection: **${char[action1 - 1].name}** and **${char[action2 - 1].name}**.`, components: [row, row1, row2, row3, row4] });
      } else if (action2 != null){
        row.components[0].setDisabled(true);
        row1.components[0].setDisabled(true);
        row2.components[0].setDisabled(true);
        row3.components[0].setDisabled(true);
        row4.components[0].setDisabled(true);
        message.edit({ content: `This command timed out!\nYour selection: **TBA** and **${char[action2 - 1].name}**.`, components: [row, row1, row2, row3, row4] });
      } else {
        row.components[0].setDisabled(true);
        row1.components[0].setDisabled(true);
        row2.components[0].setDisabled(true);
        row3.components[0].setDisabled(true);
        row4.components[0].setDisabled(true);
        message.edit({ content: `This command timed out!\nYour selection: **${char[action1 - 1].name}** and **TBA**.`, components: [row, row1, row2, row3, row4] });
      }
    });
    function finder (str, strArray) {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j].name.toLowerCase().replace('\'', '').replace('\???', '') === (str.toLowerCase().replace('\'', '').replace('\???', ''))){
          console.log(j);
          return j + 1;
          
        }
    }
    return null;
}

    function speculate(a, b) {
      return a + " and " + b + "?"
    };

    function ra(ary) {
      return ary[Math.floor(Math.random() * ary.length)];
    };

    function calculate(a_h, b_h) {
      var a = char[a_h];
      var b = char[b_h];
      var a_name = a.name;
      var b_name = b.name;
      var ary = [];
      ary.push(speculate(a_name, b_name));

      if (a_name == b_name) {
        ary.push("What do you think?");
        return ary.join(" ")
      };

      if ((true == a.negative.includes("cousin_parents")) && (true == b.negative.includes("cousin_parents"))) {
        ary.push(ra(["They're already together!"]));
        return ary.join(" ")
      };

      if ((true == a.negative.includes("bluey_parents")) && (true == b.negative.includes("bluey_parents"))) {
        ary.push(ra(["They're already together!"]));
        return ary.join(" ")
      };

      if (a.gender == b.gender) {
        ary.push(ra([
          "Interesting ship...",
          "A taste for slash I see?",
          "Creative ship."
        ]))
      };

      var no = false;

      if (a.age != b.age) {
        ary.push(ra([
          "Take a seat over there.",
          "Cannot permit that!",
          "Ew, no.",
          "Bit far a part in age?"
        ]));

        no = true
      };

      if ((true == a.negative.includes("family_bluey")) && (true == b.negative.includes("family_bluey"))) {
        ary.push(ra([
          "That's certainly a unique ship.",
          "So you think incest is wincest?",
          "It's forbidden love."
        ]))
      };

      if (!no) {
        ary.push(function() {
          switch ([a_name, b_name].join.length % 2) {
            case 0:

              return ra([
                "What can I say, it's sheer destiny for them.",
                "They'd be perfect together <3.",
                "I agree, that would work."
              ]);

            case 1:

              return ra([
                "No way.",
                "Can't recommend it really.",
                "Don't think they were made for each other really."
              ])
          }
        }())
      };

      return ary.join(" ")
    };

    function deter(p1, p2) {
      return calculate(p1, p2);
    }
  }
}
/*






*/
