function quadraticequationnls() {
  let result = document.getElementById('result');

  let ax = document.getElementById('ax').value;
  let bx = document.getElementById('bx').value;
  let cx = document.getElementById('cx').value;

  d = Math.pow(bx, 2) - 4 * ax * cx;

  result(ax, bx, cx, d);

  if (d < 0) {
    result.innerHTML = `
            <p>D = b2 - 4ac; </p>
            <p>D = ${Math.pow(bx, 2)} - 4 · ${ax} · ${cx} = ${d}</p>

            <p>Так как дискриминант меньше нуля, то уравнение не имеет действительных решений.</p>
        `;
  } else if (d > 0) {
    dSqrt = Math.sqrt(d);

    let x1 = (-bx - dSqrt) / (2 * ax);
    let x2 = (-bx + dSqrt) / (2 * ax);

    result.innerHTML = `
            <p>D = b2 - 4ac; </p>
            <p>D = ${Math.pow(bx, 2)} - 4 · ${ax} · ${cx} = ${d}</p>

            <p>Так как дискриминант больше нуля то, квадратное уравнение имеет два действительных корня:</p>

            <p id="x1">x1 = (-${bx} - ${dSqrt}) / (2 * ${ax}) = ${x1}</p>
            <p>x2 = (-${bx} + ${dSqrt}) / (2 * ${ax}) = ${x2}</p>
        `;
  } else if (d === 0) {
    let x1 = (x2 = (-bx / 2) * ax);

    result.innerHTML = `
            <p>D = b2 - 4ac; </p>
            <p>D = ${Math.pow(bx, 2)} - 4 · ${ax} · ${cx} = ${d}</p>

            <p>Так как дискриминант равен нулю то, квадратное уравнение имеет один действительный корень:</p>

            <p>x1 = x2 = -${bx} / 2 * ${ax} = ${x1}</p>
        `;
  }
}

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    quadraticequationnls();
  }
});
