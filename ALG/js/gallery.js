const videoList = [
  {
    section: "Comparison to Closed-source Model (Fig. 9)",
    topCaptions: ["OpenAI Sora", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/mammoth.mp4",
    bottomCaption:
      "Several giant wooly mammoths approach treading through a snowy meadow, their long wooly fur lightly blows in the wind as they walk, snow covered trees and dramatic snow capped mountains in the distance, mid afternoon light with wispy clouds and a sun high in the distance creates a warm glow, the low camera view is stunning capturing the large furry mammal with beautiful photography, depth of field.",
    bottomFoldable: false,
    align: "left",
    doubleLayout: false,
  },
  {
    section: "Comparison to Closed-source Model (Fig. 9)",
    topCaptions: ["OpenAI Sora", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/otter.mp4",
    bottomCaption:
      "An adorable happy otter confidently stands on a surfboard wearing a yellow lifejacket, riding along.",
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (LTX-Video, Fig. 10)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A dog leaping through the air to catch a frisbee in a sunny park-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (LTX-Video, Fig. 10)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A jet flying through a cloudy sky leaving a vapor trail-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (LTX-Video, Fig. 10)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A lion chasing a gazelle across the African savannah, dust flying up behind them-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (LTX-Video, Fig. 10)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A runner crossing the finish line during a marathon-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (Wan 2.1, Fig. 11)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/synth/wan/A snowboarder doing a backflip off a jump-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (Wan 2.1, Fig. 11)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/synth/wan/A group of people whitewater rafting in a canyon-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (Wan 2.1, Fig. 11)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/synth/wan/A helicopter hovering over a rescue site-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (Wan 2.1, Fig. 11)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/synth/wan/A rhino charging toward the camera-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (Wan 2.1, Fig. 11)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/synth/wan/A car chase through narrow city streets at night-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Fig. 5)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/main/an airplane is flying through the sky at sunset-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Fig. 5)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/main/a man swinging a tennis racquet at a tennis ball-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Fig. 5)",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/main/an eagle is flying over a mountain with trees in the background-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Fig. 5)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/main/a red double decker bus driving down a street-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Fig. 5)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/main/a man and a child riding bumper cars in an amusement park-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Fig. 5)",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/main/a snowboarder is in the air doing a trick-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Fig. 5)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/main/A red sports car driving through sand, kicking up a large amount of dust-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Fig. 5)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/main/a couple of horses are running in the dirt-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Fig. 5)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/main/a group of people riding bikes down a street-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional VBench Qualitative Results (Fig. 7, Fig. 8)",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/additional/a person riding a motorcycle down a road-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional VBench Qualitative Results (Fig. 7, Fig. 8)",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/additional/a train traveling down tracks through the woods with leaves on the ground-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional VBench Qualitative Results (Fig. 7, Fig. 8)",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/additional/a group of men riding horses in a dusty arena-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional VBench Qualitative Results (Fig. 7, Fig. 8)",
    topCaptions: ["HunyuanVideo", "HunyuanVideo + ALG (Our method)"],
    src: "../assets/vids/additional/two people scuba diving in the ocean-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional VBench Qualitative Results (Fig. 7, Fig. 8)",
    topCaptions: ["HunyuanVideo", "HunyuanVideo + ALG (Our method)"],
    src: "../assets/vids/additional/a steam train traveling through the woods-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a person is cooking food in a wok on a stove-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A helicopter spinning its blades just before lift-off-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A fighter jet flying low over the desert-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A firefighter spraying water at a burning building-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A sailboat tilting in strong wind during a regatta-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A surfer riding a giant wave during a storm, water spraying in all directions-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A galloping horse kicking up dust at sunset-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A water skier jumping over a ramp-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/The meat is picked up from the grill with tongs-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A skier racing downhill through fresh powder snow-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a brown bear in the water with a fish in its mouth-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A meteor shower lighting up the desert sky-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a clown fish hiding in a purple anemone-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a group of people in orange jumpsuits running along a river-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A boxer dodging a punch in the middle of a ring-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A cheetah sprinting across a grassy plain at full speed-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a monochromatic video capturing a cat's gaze into the camera-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A pack of wolves running across snowy terrain-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a man standing on top of a sand dune in the desert-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/a group of motorcyclists racing on a dirt track-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/a group of people watching a cow race-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a close up view of a bunch of snowdrop flowers-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/a highland cow with long horns standing in a field-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a group of buses parked at a bus station-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/a kettle is sitting on top of a campfire-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a pink rose is blooming in a garden-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/a man and a woman are boxing in a boxing ring-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/a man and a woman walking under an umbrella next to a brick wall-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/A group of people in a yellow raft is rowing through turbulent waters-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/a man sitting in the driver's seat of a car wearing sunglasses-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/A little girl, lost in thought, is quietly sitting on the bus-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/A man and woman dressed as sugar skulls in a field of flowers, sharing a loving gaze with each other-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/a person holding a taco in their hand-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a man riding a horse with a spear in his hand-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/a person is cooking eggs on an outdoor grill-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a man sitting on steps playing an acoustic guitar-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/two men are standing next to each other with a bicycle-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a person riding a motorcycle down a road-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/two young girls playing with leaves in the woods-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a person riding an atv on a dirt track-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/additional2/ltx/two young women studying in a library-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },

  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a pot is sitting on top of a campfire-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["HunyuanVideo", "HunyuanVideo + ALG (Our method)"],
    src: "../assets/vids/additional2/hunyuan/a soccer player in a yellow and black shirt is chasing a soccer ball-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/additional2/wan/a young boy is jumping in the mud-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["HunyuanVideo", "HunyuanVideo + ALG (Our method)"],
    src: "../assets/vids/additional2/hunyuan/a warthog is walking in the grass-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["HunyuanVideo", "HunyuanVideo + ALG (Our method)"],
    src: "../assets/vids/additional2/hunyuan/a woman in a wetsuit is swimming in the ocean-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["HunyuanVideo", "HunyuanVideo + ALG (Our method)"],
    src: "../assets/vids/additional2/hunyuan/an alligator is covered in green plants in the water-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["HunyuanVideo", "HunyuanVideo + ALG (Our method)"],
    src: "../assets/vids/additional2/hunyuan/an airplane is flying through the sky at sunset-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/additional2/cogvideox/An old person is holding a cup on the street, and people around are curiously looking at him-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional Qualitative Results",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/additional2/cogvideox/an old rusty car sits in the middle of a field-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
];

const videoObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const vid = entry.target;
      vid.src = vid.dataset.src;
      vid.load();
      vid.play();
      obs.unobserve(vid);
    });
  },
  {
    rootMargin: "200px 0px",
  }
);

function observeLazyVideos() {
  document
    .querySelectorAll("video.lazy-video")
    .forEach((v) => videoObserver.observe(v));
}

$(document).ready(() => {
  renderGallery();
  observeLazyVideos();
});

function renderGallery() {
  const $gallery = $("#gallery").empty();

  const sections = videoList.reduce((acc, vid) => {
    (acc[vid.section] || (acc[vid.section] = [])).push(vid);
    return acc;
  }, {});

  for (const [sectionTitle, vids] of Object.entries(sections)) {
    const $sec = $("<section>");
    $sec.append(`
      <h2 style="padding-top:0px;font-weight: 600 !important;font-size: 1.4em">
        ${sectionTitle}
      </h2><hr/>
    `);

    vids
      .filter((v) => !v.doubleLayout)
      .forEach((v) => $sec.append(createBlock(v)));

    const doubles = vids.filter((v) => v.doubleLayout);
    for (let i = 0; i < doubles.length; i += 2) {
      const $row = $("<div>").css({
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginBottom: "20px",
      });
      [doubles[i], doubles[i + 1]].forEach((vid) => {
        if (!vid) return;
        $row.append(
          $("<div>")
            .css({ flex: "1", minWidth: "300px" })
            .append(createBlock(vid))
        );
      });
      $sec.append($row);
    }

    $gallery.append($sec);
  }
}

function createBlock(vid) {
  const $w = $("<div>").addClass("concat-video").css("--scale", 0.999);

  if (vid.topCaptions?.length) {
    const spans = vid.topCaptions
      .map((c, i) =>
        i === 1
          ? `<span><strong style="color: #389bd0; font-weight: 500">${c}</strong></span>`
          : `<span>${c}</span>`
      )
      .join("");

    $w.append(`<div class="cap-row top">${spans}</div>`);
  }
  $w.append(`
    <video
      controls
      loop
      muted
      playsinline
      preload="none"
      data-src="${vid.src}"
      class="lazy-video"
    ></video>
  `);

  let captionText = "";
  if (vid.bottomCaption) {
    captionText = vid.bottomCaption;
  } else {
    const fn = vid.src.split("/").pop() || "";
    const base = fn.split("-")[0] || "";
    if (base.trim()) {
      captionText = base.charAt(0).toUpperCase() + base.slice(1) + ".";
    }
  }

  if (!captionText) return $w;

  const alignStr = vid.align ? vid.align : "center";
  const foldClass = vid.bottomFoldable ? "collapsed" : "expanded";
  const pointerStyle = vid.bottomFoldable
    ? ""
    : `pointer-events:none;cursor:default;text-align:${alignStr.trim()};padding-bottom:10px`;
  const bottomClass = vid.doubleLayout ? "cap-row-single" : "cap-row-single";

  let bottomHtml;
  if (vid.doubleLayout) {
    const parts = captionText.split("|");
    bottomHtml = parts
      .map(
        (txt) =>
          `<span class="caption-text"><strong style="font-weight: 600">Prompt:</strong> ${txt.trim()}</span>`
      )
      .join("");
  } else {
    bottomHtml = `<span class="caption-text"><strong style="font-weight: 600">Prompt:</strong> ${captionText}</span>`;
  }

  $w.append(`
    <div class="${bottomClass} ${foldClass}" style="${pointerStyle}">
      ${bottomHtml}
    </div>
  `);

  return $w;
}
