<div align="center">

<img src="assets/banner.jpg" alt="qwen-image-local — run Qwen-Image-2.1 text-to-image and photo editing on a 12 GB NVIDIA GPU. This banner was generated and then edited by the model on an RTX 3060." width="100%"/>

**Type a prompt or drop up to 10 photos: Qwen-Image-2.1 renders it on your 12 GB GPU in about 35 s, and nothing leaves your PC.**

[![Status](https://img.shields.io/badge/status-beta-d29922?style=flat-square)](CHANGELOG.md)
[![Windows](https://img.shields.io/badge/windows-10%20%7C%2011-0078D4?style=flat-square&logo=windows&logoColor=white)](https://github.com/Mats2208/qwen-image-local/releases)
[![Rust](https://img.shields.io/badge/rust-tauri%202-24C8DB?style=flat-square&logo=tauri&logoColor=white)](https://v2.tauri.app)
[![Model](https://img.shields.io/badge/model-Qwen--Image--2.1-615CED?style=flat-square)](https://huggingface.co/Qwen/Qwen-Image-2.1)
[![Benchmark](https://img.shields.io/badge/benchmark-vs%20gpt--image--2-4051B5?style=flat-square)](https://mats2208.github.io/qwen-image-local/)
[![License](https://img.shields.io/github/license/Mats2208/qwen-image-local?style=flat-square&color=green)](LICENSE)

<br/>

<table>
<tr>
<td align="center"><strong>12 GB</strong><br/><sub>VRAM, every stage fully on GPU</sub></td>
<td align="center"><strong>35 s</strong><br/><sub>per 1024² image, RTX 3060</sub></td>
<td align="center"><strong>10</strong><br/><sub>reference photos per edit</sub></td>
<td align="center"><strong>20</strong><br/><sub>tests vs gpt-image-2, all published</sub></td>
<td align="center"><strong>0</strong><br/><sub>uploads: prompts and photos stay on your PC</sub></td>
</tr>
</table>

**📊 Benchmark:** [mats2208.github.io/qwen-image-local](https://mats2208.github.io/qwen-image-local/) &nbsp;•&nbsp; **⬇️ Download:** [latest release](https://github.com/Mats2208/qwen-image-local/releases/latest)

</div>

---

Qwen-Image-2.1 came out on September 20, 2026. It is the first open-weight image model that is genuinely good **and** small: a 7B generator, where most good open models are 10–20B. This repo is the missing piece for people who don't own a 24 GB card: a one-click desktop app and a CLI that install it, fit it into 12 GB of VRAM, and get out of your way.

<sub>Unofficial. Not affiliated with Alibaba or the Qwen team. The model weights are non-commercial; see [License](#license).</sub>

## Showcase

<p align="center"><img src="assets/screen-edit.png" alt="Qwen Image Local editing a generated bookstore image into a snowy night; the reference, the instruction, quick edit buttons and the history strip are visible" width="100%"/></p>
<p align="center"><sub><b>Photos mode.</b> The bookstore on the right of the history strip was generated from text; "Edit this image" sent it back as a reference, one click on <b>Snowy night</b>, and 53 s later the snow and the cold light came in while the staircase, the lamps and the cat stayed put.</sub></p>

<table>
<tr>
<td width="50%">
<p align="center"><img src="assets/screen-setup.png" alt="First-run setup screen showing the detected RTX 3060, the recommended VRAM profile and the list of files to install" width="100%"/></p>
<p align="center"><sub>First run. It reads your GPU, driver and free disk, recommends a profile, and shows every file before downloading. Already have the weights? Point it at that folder and they are reused.</sub></p>
</td>
<td width="50%">
<p align="center"><img src="assets/screen-working.png" alt="The app mid-generation showing step 4 of 20, 1.8 seconds per step and 29 seconds left, with VRAM at 11.3 of 12 GB" width="100%"/></p>
<p align="center"><sub>Mid-generation. Step count, seconds per step and time left come from the engine itself; the meter top-right is your real VRAM (<b>11.3 / 12 GB</b>).</sub></p>
</td>
</tr>
</table>

<p align="center"><img src="assets/banner-edit-before-after.jpg" alt="Before and after: the model removed gibberish small text from its own banner while keeping everything else" width="720"/></p>
<p align="center"><sub>The banner at the top was made by the model too. It rendered the title perfectly but invented small gibberish text under the pictures (left); a second pass in Photos mode, <i>"remove all the small text at the bottom…"</i>, cleaned it (right).</sub></p>

## What it does

| | Feature | Details |
|---|---|---|
| **Create** | Text → image | Draft 1024² · Standard 1.6 MP · Max native 2K, seven aspect ratios, lockable seed |
| **Transparency** | Native RGBA | Real alpha channel from the model, no background-removal tricks |
| **Edit** | 1–10 reference photos | Relight, restyle, remove objects or people, rewrite signs, combine subjects; the first photo is the canvas |
| **Surprise me** | Idea generator | Style × subject × place × light, or a curated idea; optional theme |
| **Setup** | One-time installer | Pinned ComfyUI, Python 3.12, PyTorch CUDA 13, weights with resume and SHA-256 checks |
| **CLI** | `qil` | `doctor` · `setup` · `generate` · `edit` · `surprise` · `bench` · `config` |
| **Privacy** | Local | Prompts and photos only ever go to the engine on `127.0.0.1`. Every image is saved with a `.json` of its prompt, seed and settings |

## Honest benchmark: where it wins and where it loses

20 prompts, **one run per model, no cherry-picking**. Qwen-Image-2.1 on an RTX 3060 12 GB (int8, 40 steps, native 2K) against gpt-image-2 in the cloud. Edits use real photos from Wikimedia Commons.

| Category | Qwen wins | Tie | gpt-image-2 wins |
|---|---:|---:|---:|
| Photography (6) | 0 | 1 | 5 |
| Creativity (6) | 0 | 0 | 6 |
| **Photo editing (8)** | **1** | **7** | **0** |
| **Total** | **1** | **8** | **11** |

**For editing photos it is on par with gpt-image-2**, free, private and unlimited. **For text-to-image it is not**: it follows long prompts less closely and knows less about the world (asked for a *mate*, it drew a Chinese gourd twice). Every image, prompt and verdict is on the [benchmark page](https://mats2208.github.io/qwen-image-local/).

<table>
<tr>
<td width="33%"><p align="center"><img src="docs/img/bench/in_vidriera.webp" alt="Input photo of the Solar Roast Coffee sign" width="100%"/></p><p align="center"><sub>Input: a real storefront</sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/E3_cartel_texto_qwen.webp" alt="Qwen-Image-2.1 rewrote the sign to LA PORTEÑA CAFÉ" width="100%"/></p><p align="center"><sub><b>Qwen, local:</b> "LA PORTEÑA / CAFÉ", Ñ and accent included, same gold serif, logo untouched</sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/E3_cartel_texto_gpt.webp" alt="gpt-image-2 rewrote the same sign" width="100%"/></p><p align="center"><sub><b>gpt-image-2:</b> equally clean. Tie.</sub></p></td>
</tr>
<tr>
<td width="33%"><p align="center"><img src="docs/img/bench/in_bici.webp" alt="Input photo of a green bicycle against a wall" width="100%"/></p><p align="center"><sub>Input: "remove the background"</sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/E7_bici_recorte_qwen.webp" alt="Qwen cut out the bicycle with a transparent background at its original size" width="100%"/></p><p align="center"><sub><b>Qwen wins:</b> the exact bicycle, same position and scale, ready to composite</sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/E7_bici_recorte_gpt.webp" alt="gpt-image-2 redrew the bicycle larger with a transparent background" width="100%"/></p><p align="center"><sub>gpt-image-2 redraws it larger and changes the rear rack</sub></p></td>
</tr>
<tr>
<td width="33%"><p align="center"><sub>Text-to-image:<br/><i>"infographic 'Cómo preparar mate', 6 numbered steps…"</i></sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/C3_infografia_mate_qwen.webp" alt="Qwen infographic with misspelled small captions" width="100%"/></p><p align="center"><sub><b>Qwen loses:</b> big title perfect, small captions misspelled ("Inclinar <b>enj</b> mate"), cups instead of a mate</sub></p></td>
<td width="33%"><p align="center"><img src="docs/img/bench/C3_infografia_mate_gpt.webp" alt="gpt-image-2 infographic with correct captions and mate icons" width="100%"/></p><p align="center"><sub><b>gpt-image-2 wins:</b> every caption right, real mate icons</sub></p></td>
</tr>
</table>

## How it fits in 12 GB

The three models don't fit together: text encoder 8.9 GB + image model 6.9 GB + VAE 0.6 GB = 16.4 GB. So they run **one stage at a time, each loaded completely into VRAM**, while the others wait in system RAM. Nothing is split between CPU and GPU, which is what makes low-VRAM setups slow. Verified in the engine log (`loaded completely … full load: True` for all three stages) and by the speed: 1.35 s per step at 1024², which is compute-bound on an RTX 3060.

Two choices matter more than anything else:

- **int8 "convrot" weights, not GGUF.** Ampere and newer cards have int8 tensor cores, and ComfyUI ships native kernels for this format, so it is faster than dequantizing GGUF on the fly and close to lossless.
- **PyTorch built for CUDA 13.** With CUDA 12.8 builds, ComfyUI silently disables its optimized CUDA backend. The installer picks the right build and checks your driver (R580 or newer).

## Install

**Requirements:** Windows 10/11 · NVIDIA GPU with 12 GB (10 GB experimental, see below) · driver 580+ · ~25 GB free disk · 32 GB RAM (what it was tested with; 16 GB is untested).

1. Download `Qwen Image Local_x.y.z_x64-setup.exe` from [Releases](https://github.com/Mats2208/qwen-image-local/releases/latest) and run it. It installs for your user only; no admin needed.
2. Open the app. The setup screen downloads about **19.5 GB** once: engine, Python, PyTorch, and the weights from [Hugging Face](https://huggingface.co/Comfy-Org/Qwen-Image-2.1). Downloads resume if interrupted and are checked against SHA-256.
3. Press **Start creating**.

Everything lives in `%LOCALAPPDATA%\qwen-image-local` (models can go on another disk). Uninstalling is deleting that folder.

## Quick start (CLI)

`qil.exe` ships in the release zip and uses the same install as the app.

```text
> qil doctor
GPU        RTX 3060 · 12.0 GB VRAM · driver 610.88 (ok)
profile    balanced (12 GB+ (int8 encoder))
  [x] uv 0.12.18 (Python manager)
  [x] ComfyUI engine
  [x] Python 3.12
  [x] PyTorch (CUDA 13) + engine packages
  [x] qwen_image_2.1_int8_convrot.safetensors (6.76 GB)
  [x] qwen3vl_8b_int8_convrot.safetensors (8.71 GB)
  [x] qwen_image_2.1_vae_bf16.safetensors (644 MB)
Ready. Try: qil generate "a red fox asleep in the snow" --preset draft
```

```bash
qil setup                                             # install; profile picked from your VRAM
qil generate "a red fox asleep in the snow" --preset draft
qil generate "a mate gourd sticker" --transparent --aspect 1:1
qil edit "Change the scene to a snowy night" -i street.jpg --preset standard
qil edit "Put the dog from <image2> next to the bike in <image1>" -i bike.jpg -i dog.jpg
qil surprise --theme capybaras
qil bench --suite bench/suite.json --preset max       # reproduce the published benchmark
```

Pass `--keep-engine` to leave the engine running between calls so each one skips the start-up.

## VRAM profiles

| Profile | Text encoder | Peak VRAM (desktop included) | 1024², 20 steps | Status |
|---|---|---:|---:|---|
| **Balanced** | int8, 8.9 GB | 11.4 GB | 32 s | Tested on RTX 3060 12 GB |
| **Compact** | w4a8, 6.3 GB | 8.9 GB | 33 s | Experimental: should fit 10 GB cards |

The compact profile cuts peak VRAM by about 2.5 GB at the same speed. **8 GB cards are untested:** the only way to emulate one here was ComfyUI's soft `--reserve-vram` cap, and peak usage still went above 8 GB. If you have an 8 or 10 GB card, a `qil bench` run on [bench/tiers](bench/tiers) would be the most useful contribution to this repo.

## What it doesn't do (yet)

- **NVIDIA on Windows only.** For AMD, Intel, Apple Silicon or cards under 8 GB, use [nihui/qwenimage-ncnn-vulkan](https://github.com/nihui/qwenimage-ncnn-vulkan): a CLI that runs on any Vulkan GPU by trading speed for memory.
- **No live preview** while sampling; you see the final image.
- **No masks or brush.** Local edits are described in words; the model supports masks and marks, the app doesn't expose them yet.
- **No prompt enhancer.** Qwen's official rewriter is a separate 9B model; it doesn't fit alongside on 12 GB.
- **Not for commercial use** while the weights stay under the Qwen Research License.

## FAQ

**What AI image model runs on a 12 GB GPU like an RTX 3060?** Qwen-Image-2.1 with int8 weights, loading one stage at a time. This app does that setup for you: about 35 s per 1024² image, about 7 minutes at native 2K.

**Is Qwen-Image-2.1 as good as gpt-image-2?** For editing photos, yes in our tests (7 ties and 1 win out of 8). For text-to-image, no (gpt-image-2 won 11 of 12).

**Can I use my existing ComfyUI models folder?** Yes. Choose it on the setup screen or run `qil setup --models-dir <folder>`. Files that match in size are not downloaded again.

## Repo layout

```
crates/qil-core   installer, engine lifecycle, generation client, GPU detection (Rust)
crates/qil-cli    the qil command line
app/              Tauri 2 desktop app (Rust + plain HTML/CSS/JS, English and Spanish)
bench/            suite.json, input photos with credits, results, verdicts, site builder
docs/             GitHub Pages benchmark site
```

Build from source: `cargo build --release -p qil-cli`, and `cd app && npm install && npx tauri build` for the app.

## Credits

[Qwen-Image-2.1](https://github.com/QwenLM/Qwen-Image-2.1) by the Qwen team at Alibaba · [ComfyUI](https://github.com/comfyanonymous/ComfyUI) and the [Comfy-Org](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) int8 repacks · [uv](https://github.com/astral-sh/uv) · [Tauri](https://tauri.app). Benchmark photos from Wikimedia Commons; authors and licenses in [bench/inputs/credits.json](bench/inputs/credits.json).

## License

The code in this repo is [MIT](LICENSE). The Qwen-Image-2.1 weights, which the app downloads from Hugging Face, are under the [Qwen Research License](https://huggingface.co/Qwen/Qwen-Image-2.1/blob/main/LICENSE) and are **not licensed for commercial use**. ComfyUI is GPL-3.0 and runs as a separate process. Edits of CC BY-SA benchmark photos are CC BY-SA 4.0.
