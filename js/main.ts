// Simulated Step 2: Technical Greeting
window.onload = () => {
    const loadTime = performance.now();
    console.log(`Step 2: Technical Greeting - Site ready in ${loadTime.toFixed(2)}ms`);
};

// Form Interaction (Step 11 & 12)
const form = document.getElementById('demoForm') as HTMLFormElement;
const success = document.getElementById('successMessage');

if (form && success) {
    form.onsubmit = (e) => {
        e.preventDefault();
        form.classList.add('hidden');
        success.classList.remove('hidden');
        console.log("Step 12: Post-Conversion Success Triggered.");
    };
}

// Add Toggle Button to UI
const btn = document.createElement('button');
btn.innerText = "Toggle Journey X-Ray";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.zIndex = "2000";
btn.onclick = () => document.body.classList.toggle('x-ray-mode');
document.body.appendChild(btn);