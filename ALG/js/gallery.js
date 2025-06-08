// gallery.js
const videoList = [
  {
    section: "Comparison to Closed-source Model (Fig. X)",
    topCaptions: ["OpenAI Sora", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/mammoth.mp4",
    bottomCaption:
      "Several giant wooly mammoths approach treading through a snowy meadow, their long wooly fur lightly blows in the wind as they walk, snow covered trees and dramatic snow capped mountains in the distance, mid afternoon light with wispy clouds and a sun high in the distance creates a warm glow, the low camera view is stunning capturing the large furry mammal with beautiful photography, depth of field.",
    bottomFoldable: false,
    align: "left",
    doubleLayout: false,
  },
  {
    section: "Comparison to Closed-source Model (Fig. X)",
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
      "Comparison Using Synthetically Generated Images (LTX-Video, Fig. X)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A dog leaping through the air to catch a frisbee in a sunny park-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (LTX-Video, Fig. X)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A jet flying through a cloudy sky leaving a vapor trail-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (LTX-Video, Fig. X)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A lion chasing a gazelle across the African savannah, dust flying up behind them-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (LTX-Video, Fig. X)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A runner crossing the finish line during a marathon-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (Wan 2.1, Fig. X)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/synth/wan/A snowboarder doing a backflip off a jump-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (Wan 2.1, Fig. X)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/synth/wan/A group of people whitewater rafting in a canyon-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (Wan 2.1, Fig. X)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/synth/wan/A helicopter hovering over a rescue site-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (Wan 2.1, Fig. X)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/synth/wan/A rhino charging toward the camera-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section:
      "Comparison Using Synthetically Generated Images (Wan 2.1, Fig. X)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/synth/wan/A car chase through narrow city streets at night-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Figure X)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/main/an airplane is flying through the sky at sunset-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Figure X)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/main/a man swinging a tennis racquet at a tennis ball-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Figure X)",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/main/an eagle is flying over a mountain with trees in the background-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Figure X)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/main/a red double decker bus driving down a street-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Figure X)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/main/a man and a child riding bumper cars in an amusement park-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Figure X)",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/main/a snowboarder is in the air doing a trick-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Figure X)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/main/A red sports car driving through sand, kicking up a large amount of dust-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Figure X)",
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/main/a couple of horses are running in the dirt-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "VBench Qualitative Results (Figure X)",
    topCaptions: ["Wan 2.1", "Wan 2.1 + ALG (Our method)"],
    src: "../assets/vids/main/a group of people riding bikes down a street-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional VBench Qualitative Results (Figure X, Figure X)",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/additional/a person riding a motorcycle down a road-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional VBench Qualitative Results (Figure X, Figure X)",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/additional/a train traveling down tracks through the woods with leaves on the ground-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional VBench Qualitative Results (Figure X, Figure X)",
    topCaptions: ["CogVideoX", "CogVideoX + ALG (Our method)"],
    src: "../assets/vids/additional/a group of men riding horses in a dusty arena-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional VBench Qualitative Results (Figure X, Figure X)",
    topCaptions: ["HunyuanVideo", "HunyuanVideo + ALG (Our method)"],
    src: "../assets/vids/additional/two people scuba diving in the ocean-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
  {
    section: "Additional VBench Qualitative Results (Figure X, Figure X)",
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
    topCaptions: ["LTX-Video", "LTX-Video + ALG (Our method)"],
    src: "../assets/vids/synth/ltx/A pack of wolves running across snowy terrain-0.mp4",
    bottomCaption: null,
    bottomFoldable: false,
    align: null,
    doubleLayout: false,
  },
];

function renderGallery() {
  const $gallery = $("#gallery").empty();

  // group by section
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

    // non–doubleLayout as full width
    vids
      .filter((v) => !v.doubleLayout)
      .forEach((v) => $sec.append(createBlock(v)));

    // doubleLayout side-by-side
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

  // Top captions
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
  // Video element
  $w.append(
    `<video src="${vid.src}" controls autoplay loop muted playsinline></video>`
  );

  // Figure out which caption to show
  let captionText = "";
  if (vid.bottomCaption) {
    captionText = vid.bottomCaption;
  } else {
    // try to parse from filename
    const fn = vid.src.split("/").pop() || "";
    const base = fn.split("-")[0] || "";
    if (base.trim()) {
      captionText = base.charAt(0).toUpperCase() + base.slice(1) + ".";
    }
  }

  // If there’s no caption at all, skip adding the div
  if (!captionText) return $w;

  // Build the bottom caption block
  const alignStr = vid.align ? vid.align : "center";
  const foldClass = vid.bottomFoldable ? "collapsed" : "expanded";
  const pointerStyle = vid.bottomFoldable
    ? ""
    : `pointer-events:none;cursor:default;text-align:${alignStr.trim()};padding-bottom:10px`;
  const bottomClass = vid.doubleLayout ? "cap-row-single" : "cap-row-single";

  let bottomHtml;
  if (vid.doubleLayout) {
    // split on '|' if you want two spans, otherwise just one span
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
