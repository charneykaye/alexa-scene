TARGET := ./target

.target:
	mkdir $(TARGET)

all: .target
	zip -r $(TARGET)/alexa-scene.zip *