import 'package:flutter/material.dart' hide MenuBar;
import 'package:minimal/components/components.dart';

class TypographyPage extends StatelessWidget {
  const TypographyPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          SingleChildScrollView(
            child: Container(
              margin: const EdgeInsets.symmetric(horizontal: 32),
              child: Column(
                children: <Widget>[
                  const MenuBar(),
                  Align(
                    alignment: Alignment.center,
                    child: Container(
                      margin: marginBottom12,
                      child: Text("Menus", style: headlineTextStyle),
                    ),
                  ),
                  divider,
                  Container(
                    margin: marginBottom40,
                  ),
                  Align(
                    alignment: Alignment.center,
                    child: Container(
                      margin: marginBottom12,
                      child: Text("3/17/23 - Campari Night",
                          style: headlineSecondaryTextStyle),
                    ),
                  ),
                  dividerSmall,
                  Container(
                    margin: marginBottom24,
                  ),
                  divider,
                ],
              ),
            ),
          ),
        ],
      ),
      backgroundColor: Colors.white,
    );
  }
}
