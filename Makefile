TARGET := ./target

.target:
	mkdir -p $(TARGET)

.clean:
	rm target/*

all: .target .clean
	zip $(TARGET)/alexa-scene.zip src/*