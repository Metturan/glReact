export default '

attribute vec4 position;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying float distFromCenter;

void main () {
  distFromCenter = length(position.xyz);
  gl_Position = projectionMatrix * modelViewMatrix * position;
}

';