// Simulated Step 2: Technical Greeting
window.onload = function() {
    var loadTime = performance.now();
    console.log("Step 2: Technical Greeting - Site ready in " + loadTime.toFixed(2) + "ms");
};

// Form Interaction (Step 11 & 12)
var form = document.getElementById('demoForm');
var success = document.getElementById('successMessage');

if (form && success) {
    form.onsubmit = function(e) {
        e.preventDefault();
        form.classList.add('hidden');
        success.classList.remove('hidden');
        console.log("Step 12: Post-Conversion Success Triggered.");
    };
}

// Add Toggle Button to UI
var btn = document.createElement('button');
btn.innerText = "Toggle Journey X-Ray";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.zIndex = "2000";
btn.style.padding = "12px 20px";
btn.style.background = "#1a73e8";
btn.style.color = "#fff";
btn.style.border = "none";
btn.style.borderRadius = "6px";
btn.style.cursor = "pointer";
btn.style.fontWeight = "600";
btn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
btn.onclick = function() {
    document.body.classList.toggle('x-ray-mode');
};
document.body.appendChild(btn);
