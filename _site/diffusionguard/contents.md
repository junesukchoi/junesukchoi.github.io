# TLDR
We present a method to protect images against diffusion-based editing by leveraging the inherent property of inpainting diffusion models, i.e., early-stage denoising behavior.

- (Main image)
Caption: "Figure 1. Overview of protecting images against malicious image editing."
(Slightly smaller text, slightly lighter-than-black gray)

- (Demonstration image)
Caption: "Figure 2. Edit results of unprotected images vs. DiffusionGuard-protected images."
(Slightly smaller text, slightly lighter-than-black gray)

# Problem: Protecting Images from Malicious Inpainting
Malicious image editing has been easier than ever, enabled by diffusion-based image editing tools (e.g., inpainting, InstructPix2Pix), posing privacy risks.

Existing methods aim for perturbation that simply maximizes reconstruction loss. We find that in practice, this is not enough, as they result in protection failure cases under realistic evaluation (e.g., various input masks)

# Method and Key Observation
## Idea 1: Early-stage perturbation loss---focus on early denoising steps

- Left side observation image
Caption: "__**Standard diffusion models after 1 step:**__
Blurry after 1 step, only \darkredcolor{coarse features}"
Single vertical line divider that divides both image and text
- Right side observation image
Caption: "__**Inpainting models after 1 step:**__
\darkredcolor{Fine details} of mask region; copy-paste"

-> \darkredcolor\bold{"shortcut"} behavior to minimize inpainting loss during fine-tuning standard models

\therefore We focus on early denoising steps only:
(equation 1)

## Idea 2: Mask augmentation
Minimize expected adversarial loss across multiple masks from the mask augmentation function \mathcal{A}(\cdot), which maps a mask to a similar shaped mask:
(equation 2)




